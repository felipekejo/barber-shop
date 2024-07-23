import { useContext } from 'react'
import ContextoUser from '../contexts/ContextUser'

const useUser = () => useContext(ContextoUser)
export default useUser
