import React, {useState, useEffect} from "react";
//import Button from "@material-ui/core/Button";
import {useHistory, useParams} from "react-router-dom";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

export default function BrowseCategories() {
    const history = useHistory();
    const {id} = useParams();

    const [category, setCategory] = useState(null);
    const [fora, setFora] = useState([]);

    useEffect(() => {
        getCategory();
        getFora();
    },);

    const getCategory = async () => {
        const response = await axios.get('/api/category/'+id);
        setCategory(response.data);
    };

    const getFora = async () => {
      const response = await axios.get('/api/forum/category/'+id);
        setFora(response.data);
    };

    return (
        <div style={{padding: "2rem"}}>

            {category && <h1>{category.title}</h1>}
{/** if (user.role!=='basic'){
            <Button variant="contained" color="primary" onClick={() => history.push("/forum/create/"+id)}>Create Forum</Button>
            }
*/}
            <List>
                {fora.map((forum, index) => (
                    <ListItem button onClick={() => history.push(`/forum/${forum._id}`)}>
                        <ListItemText primary={forum.title} secondary={forum.createdAt} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}