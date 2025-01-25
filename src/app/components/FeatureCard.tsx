import { Paper, Typography } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";

type Props = {
  title: string;
  description: string;
  icon: SvgIconComponent;
};

const FeatureCard = ({ title, description, icon: Icon }: Props) => (
  <Paper
    elevation={3}
    sx={{
      p: 4,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <Icon sx={{ fontSize: 48, mb: 2, color: "primary.main" }} />
    <Typography variant="h5" component="h3" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
  </Paper>
);

export default FeatureCard;
