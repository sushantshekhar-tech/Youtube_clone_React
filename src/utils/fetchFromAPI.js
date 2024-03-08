import axios from "axios";

const BASE_URL="https://youtube-v31.p.rapidapi.com"

const options = {
  url:BASE_URL,
  params: {
   maxResults:'50'
  },
  headers: {
    'X-RapidAPI-Key': '20a1fb6858msh17cbc9dc42fa0c1p1468a2jsn1e76ff09f92e',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

export const fetchFromAPI  = async(url)=>{
const response=await axios.get(`${BASE_URL}/${url}` , options)

return response.data

}