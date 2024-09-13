import { SignIn } from "@clerk/nextjs";
import { AppBar, Box, Button, Container, Toolbar, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function SignInPage(){
    return (
        <Container maxWidth="100vw">
      <Head>
        <title>FlashCardAI</title>
      </Head>
      <AppBar position="static" sx={{backgroundColor: "#2196f3"}}>
        <Toolbar>
          <Typography variant="h6" style={{flexGrow:1}}>FlashCardAI</Typography>
          <Button color="inherit">
                        <Link href="/" passHref>
                         Home
                        </Link>
                    </Button>
            <Button color="inherit">
            <Link href="/sign-in" passHref>
               Sign in
            </Link>
            </Button>
            <Button color="inherit">
            <Link href="/sign-up" passHref>
                Sign up
            </Link>
            </Button>
        </Toolbar>
        </AppBar>
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h4">Sign In</Typography>
                <SignIn/>
            </Box>
        </Container>
    )
}