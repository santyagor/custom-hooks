import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    const [state, setState] = useState({
        data:null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () =>{

        setState({
            ...state,
            isLoading: true
        });

        const resp =  await fetch(url)
        .then(async()=>{
            setState({data:await resp.json(),isLoading:false,hasError:null});
        })
        .catch(error=>{
            console.log('Error sugerido : '+ error);
            setState({data:null,isLoading:false,hasError:error});
        });        
        

        // setState({
        //     data,
        //     isLoading: false,
        //     hasError,
        // });
    }
    
    useEffect(() =>{
        getFetch();
    }, [url])


    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
