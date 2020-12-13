import React from 'react'; 
import './style.css';
import HomeCard from './HomeCard';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme ,ThemeProvider} from '@material-ui/core/styles';


const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });
  
const Home = () => {

    return (
       <div id="home">
            <ThemeProvider theme={darkTheme}>
                <Grid container style={{marginTop:'-40px'}}>
                    <Grid item lg={4} md={4} xs={12} style={{padding:'10px'}}>
                        <HomeCard  
                           title="Hello World" 
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?coding"/>
                        <HomeCard  
                           title="Hello World" 
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?music"/>
                        <HomeCard  
                           title="Hello World" 
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?data"/>
                        <HomeCard  
                           title="Hello World" 
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?flower"/>
                        <HomeCard  
                           title="Hello World" 
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?hills"/>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12} style={{padding:'10px'}}>
                        <HomeCard 
                           title="Hello World"  
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam" 
                           img="https://source.unsplash.com/weekly?mosquitoes"/>
                        <HomeCard 
                           title="Hello World"  
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?corona"/>
                        <HomeCard 
                           title="Hello World"  
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam" 
                           img="https://source.unsplash.com/weekly?natural"/>
                        <HomeCard 
                           title="Hello World"  
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?music"/>
                        <HomeCard 
                           title="Hello World"  
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam" 
                           img="https://source.unsplash.com/weekly?data"/>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12} style={{padding:'10px'}}>
                        <HomeCard 
                           title="Hello World"   
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?data"  />
                        <HomeCard 
                           title="Hello World"   
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?flower"  />
                        <HomeCard 
                           title="Hello World"   
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?hills"  />
                        <HomeCard 
                           title="Hello World"   
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?plants"  />
                        <HomeCard 
                           title="Hello World"   
                           body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam"
                           img="https://source.unsplash.com/weekly?music"  />
                    </Grid>
                </Grid>
        </ThemeProvider>
       </div>
    );
}
 
export default Home;