// import { useState }
const useFetchPost = ({ item }) => {
    fetch('https://rest-api-alvarez-carlos.vercel.app/api/orders', item)
        .then(res => {
            // console.log(res.status)   
            if (res.status !== 201){
                return alert('La orden no pudo ser generada!')
            }
            alert('La order ha sido generada!')
        })
}

export default useFetchPost