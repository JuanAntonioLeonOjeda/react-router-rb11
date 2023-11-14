import api from "./config";

const getAllUsers = async () => {
  try {
    const { data } = await api.get('/users')
    return data
  } catch (error) {
    console.log(error)
  }
}

const getOneUser = async (id) => {
  try {
    const { data } = await api.get(`/users/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllUsers,
  getOneUser
}