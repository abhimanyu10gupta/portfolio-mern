import { styled } from "@mui/system";
import { Box, Card, Paper } from "@mui/material";

const WidgetWrapper = styled(Card)(({theme}) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRadius: "0.75rem",
}));

export default WidgetWrapper;