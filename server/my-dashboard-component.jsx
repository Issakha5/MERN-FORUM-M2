import { ApiClient } from 'admin-bro'
import { Box } from '@admin-bro/design-system'
import { Header, Text } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = (props) => {
  return (

    <Box> 
    <Header.H1>BIENVENUE À LA PAGE D'ACCUEIL D'ADMINISTRATION</Header.H1>
    <Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </Text>

  <Text mt="default" variant="sm">This text was from Wikipedia</Text>
    <Box variant="grey">
  <Box variant="white" flex flexDirection="row">
    
  </Box>
</Box>


    <footer>  </footer>
    </Box>
   
  )

}

export default Dashboard

