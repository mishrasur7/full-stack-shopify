import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useAppSelector } from "../redux/hooks/customAppHooks";

function Home() {
  const products = useAppSelector((state) => state.productReducer);

  console.log("products", products);

  return (
    <div className="home">
      {products.map((value, key) => {
        return (
          <Card className="card">
            <CardMedia
              component="img"
              image={value.productImage[0]}
              sx={{ cursor: "pointer" }}
            />
            <CardContent>
              <Typography>{value.title}</Typography>
              <Typography>Price: {value.price} $</Typography>
              <Box
                style={{
                  marginTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <IconButton>
                  <DeleteIcon color="error" />
                </IconButton>
              </Box>
              <Button className="add__to--cart">Add to cart</Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default Home;
