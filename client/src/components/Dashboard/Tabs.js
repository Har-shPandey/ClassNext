import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1890ff',
    }
})(Tabs);

const AntTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        minWidth: 72,
        fontSize: 25,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing(4),
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: 'black',
            opacity: 1,
        },
        '&$selected': {
            color: 'black',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: 'black',
        },

    },
    selected: {},
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: '#fff',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    padding: {
        padding: theme.spacing(3),
    },
    // demo1: {
    //     background: 'linear-gradient(45deg, #235484, #28e0e0)',
    //     color: "black"

    // },
    demo2: {
        backgroundColor: '#2e1534',
    },
}));

export default function CustomizedTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [selectedTab, setSelectedTab] = React.useState(0);
    const handleTabChange = (e, newValue) => {
        setSelectedTab(newValue)
        props.onSelectTab(newValue);
        console.log(newValue)
    }

    return (
        <div className={classes.root}>
            <div className={classes.demo1}>
                <AntTabs value={selectedTab} onChange={handleTabChange} aria-label="ant example" centered>
                    <AntTab label="Classroom History" />
                    <AntTab label="Chat Report" />
                    <AntTab label="Profile" />
                    {/* <AntTab label="Sentiment Analysis" /> */}
                </AntTabs>
                {/* <Typography className={classes.padding} /> */}
            </div>

        </div>
    );
}
