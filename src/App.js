import React, {useEffect, useState} from 'react'
import { Box, Flex, Heading } from 'rebass'
import MahasiswaCard from './components/mahasiswa-card'
import SearchForm from './components/search-form'
import Clock from './components/Jam'
import Angkatan from './components/Angkatan'

function App() {
  const [displayNotFoundText, setDisplayNotFoundText] = useState('none')

  const [searchResultList, setSearchResultList] = useState([])

  const [dataMahasiswa, fetchMahasiswa] = useState([])

  const submitHandler = (inputValue) => {
    const filterData = dataMahasiswa.filter(data => {
      const regex = new RegExp(inputValue.toLowerCase(), 'i')
      return regex.test(data.nama_lengkap.toLowerCase()) === true
    })

    if (filterData.length > 0) {
      // Hide Not Found Text
      setDisplayNotFoundText('none')

      const searchResultData = [];
      filterData.forEach(data => (
        searchResultData.push(
        <MahasiswaCard dataMahasiswa={data} />
        )
      ))

      setSearchResultList(searchResultData)
    } else {
      // Show Not Found Text
      setDisplayNotFoundText('block')

      //  emptying search result data
      setSearchResultList([])
    }
  }

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(json => {
        fetchMahasiswa(json.datalist)
      })
    }, [])

return (
    <Box>
      <Clock/>
      <Angkatan/>
      <SearchForm onSubmit={submitHandler} />
      
      <Heading mt='50px' display={displayNotFoundText}>Data not found</Heading>
      <Flex flexWrap='wrap' mt='50px' mx={-2} alignItems='center'>
       {searchResultList}
      </Flex>
      
      
    </Box>
  );
}

export default App;
