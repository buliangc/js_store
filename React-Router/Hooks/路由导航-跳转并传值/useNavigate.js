// 跳转并传值
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate();
 function clickCityHandle(city) {
    navigate('/home', { state: { name: 'zhou' } })
  }
 
// 接收跳转传过来的值
import { useLocation } from 'react-router-dom'
const location = useLocation()
const { state } = location
console.log(location, state);
 