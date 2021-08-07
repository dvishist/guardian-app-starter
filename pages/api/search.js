import axios from 'axios'

const searchHandler = async (req, res) => {
  const date = new Date()
  date.setMonth(date.getMonth() - 3)

  const searchResults = await axios.get('https://content.guardianapis.com/search', {
    params: {
      'api-key': process.env.GUARDIAN_API_KEY,
      'q': req.query.term,
      'from-date': req.query.showRecent ? date : null
    }
  })

  const apiResults = searchResults.data.response.results.map(result => {
    return {
      id: result.id,
      title: result.webTitle,
      url: result.webUrl,
      date: result.webPublicationDate,
      sectionId: result.sectionId,
      sectionName: result.sectionName,
    }
  })

  res.status(200).json(apiResults)
}

export default searchHandler