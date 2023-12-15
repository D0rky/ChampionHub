import { ref } from 'vue'
import axios from 'axios'


const Champions = ref([])
const pages = ref(1)
const loading = ref(false)
const activePage = ref(1)
const pageSize = ref(12)
const currentChampion = ref(null)

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getChampions = async () => {
  loading.value = true
  const { data, headers } = await api.get('/api/champions', {
    params: {
      page: activePage.value,
      size: pageSize.value,
    },
  })
  Champions.value = data
  pages.value = Number(headers['x-total-pages']) || 1

  console.log(data)
  loading.value = false
}

const fetchChampion = async (id) => {
    const { data } = await api.get(`/api/champions/${id}`)
    currentChampion.value = data
    console.log(data)
  }

const useAPI = () => {
  return { Champions, pages, activePage, loading, pageSize, getChampions, fetchChampion, currentChampion}
}

export default useAPI