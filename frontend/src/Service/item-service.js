
// Function to get the Authorization header
const getAuthHeader = () => {
    const username = 'user';
    const password = `${process.env.REACT_APP_API_PASSWORD}`;
    const token = btoa(`${username}:${password}`); 
    return { Authorization: `Basic ${token}` };
};

// GET request
export const fetchData = async () => {
    try {
        console.log(`Here: ${process.env.REACT_APP_API_URL} ${process.env.REACT_APP_API_PASSWORD}`)
        const response = await fetch(`${process.env.REACT_APP_API_URL}/get`, {
            method: 'GET',
            headers: {
                ...getAuthHeader(),
                'Content-Type': 'application/json', 
            }
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

// POST request
export const createItem = async (body) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}`, {
            method: 'POST',
            headers: {
                ...getAuthHeader(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body) // Convert body to JSON string
        });
        
        return await response.json();
    } catch (error) {
        console.error('Error creating item:', error);
        throw error;
    }
};


export const updateItem = async (id, body) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/update/${id}`, {
            method: 'PUT',
            headers: {
                ...getAuthHeader(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body) 
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating item:', error);
        throw error;
    }
};



export async function deleteItem(id) {
    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/delete/${id}`,{
            method:'DELETE',
            headers:{
                ...getAuthHeader(),
                'Content-Type': 'application/json', 
            }
        });
        return response;
    }
    catch(err){
        console.log('Error deleting items');
    }   
}

export async function deleteAll(){
    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}/delete`,{
            method:'DELETE',
            headers:{
                ...getAuthHeader(),
                'Content-Type': 'application/json', 
            }
        });
        return response;
    }
    catch(err){
        console.log('Error deleting all the items');
    }   
}

export async function sortItems(sortStatus){
try{
 const response = await fetch(`${process.env.REACT_APP_API_URL}/sort/${sortStatus}`,{
    method:'GET',
    headers:{
        ...getAuthHeader(),
        'Content-Type': 'application/json', 
    }
    
 })
 return await response.json();
}
catch(err){
    console.log('Error while sorting');
}
}