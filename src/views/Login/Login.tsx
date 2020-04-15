/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import {useIntl} from "react-intl";
import logo from "../../logo.svg";
import {useStyles} from "./Login.style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {Divider} from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import {getRedirectHandler} from "../../services/routing/history";

type LoginProps = {
    title: string;
};

const Login = (props: LoginProps) => {
    const {formatMessage: f} = useIntl();
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <img src={logo} className={classes.logo} alt="logo"/>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {f({id: 'loginTitle'})}
                    </Typography>
                    <form className={classes.form} noValidate autoComplete="off">
                        <FormControl margin={'normal'} fullWidth={true}>
                            <TextField label="Email" type={'email'} variant="outlined" />
                        </FormControl>
                        <FormControl margin={'normal'} fullWidth={true}>
                            <Button variant="contained" color="primary" onClick={getRedirectHandler('/')}>
                                {f({id: 'loginEmailButton'})}
                            </Button>
                        </FormControl>
                    </form>
                    <FormControl margin={'dense'} fullWidth={true}>
                        <Divider />
                    </FormControl>

                    <FormControl margin={'normal'} fullWidth={true}>
                        <Button variant="contained" color="default" startIcon={<GitHubIcon />}>
                            {f({id: 'loginGithubButton'})}
                        </Button>
                    </FormControl>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
