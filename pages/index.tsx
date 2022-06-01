import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React from "react";
import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home</title>
                <link rel="icon" href="/icons/icon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Josh Landsman
                </h1>

                <img src={"/images/pfp.jpeg"} alt={"pfp"}
                     className={styles.pfp}/>


                <body className={styles.description}>Full Stack Developer <br/>
                Studying at Georgia Institute of
                Technology
                </body>

                <AppBar position={"static"} className={styles.test}>
                    <Toolbar variant="dense" sx={{justifyContent: "center"}}>
                        <IconButton color="default"
                                    aria-label="menu" sx={{mr: 1}}
                                    onClick={() => console.log("clicked")}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit"
                                    component="div">
                            Photos
                        </Typography>
                        <IconButton color="default"
                                    aria-label="menu" sx={{mr: 1}}>
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit"
                                    component="div">
                            Photos
                        </Typography>
                    </Toolbar>
                </AppBar>
            </main>

            <footer className={styles.footer}>
                &copy; {new Date().getFullYear()} Josh Landsman. All rights
                reserved.
            </footer>
        </div>
    )
}
