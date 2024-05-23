import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  shadowSize: [41, 41]
});

const Index = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Welcome to the Kayaking Trip Planner
      </Heading>
      <Text color={"gray.500"}>
        Plan your kayaking trips starting from Sollenkroka with ease.
      </Text>
      <Flex justify="center" mt={6}>
        <MapContainer center={[59.3706, 18.6984]} zoom={13} style={{ height: "500px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[59.3706, 18.6984]} icon={customIcon}>
            <Popup>
              Sollenkroka
            </Popup>
          </Marker>
        </MapContainer>
      </Flex>
    </Box>
  );
};

export default Index;