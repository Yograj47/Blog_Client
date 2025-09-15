import { CircularProgress, Box, Typography } from '@mui/material';

interface UploadingScreenProps {
  visible: boolean;
  message?: string;
}

export default function UploadingScreen({
  visible,
  message = 'Uploading...',
}: UploadingScreenProps) {
  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        bgcolor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(2px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2000,
      }}
    >
      <CircularProgress size={60} />
      <Typography
        variant="h6"
        sx={{ mt: 2, color: 'text.secondary', fontWeight: 500 }}
      >
        {message}
      </Typography>
    </Box>
  );
}
