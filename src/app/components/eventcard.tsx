"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

interface EventCardProps {
  title: string;
  icon: React.ReactNode;
  content: string[];
  buttonText: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, icon, content, buttonText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card style={{ width: 300, height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardContent style={{ textAlign: 'center' }}>
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: 40, marginBottom: 16 }} // Usa estilos en línea aquí
          >
            {icon}
          </motion.div>
          <Typography variant="h6" color="primary" gutterBottom>
            {title}
          </Typography>
          {content.map((line, index) => (
            <Typography key={index} variant="body2" color="textSecondary">
              {line}
            </Typography>
          ))}
        </CardContent>
        <CardActions style={{ justifyContent: 'center', paddingBottom: 16 }}>
          <Button variant="outlined">{buttonText}</Button>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default EventCard;
