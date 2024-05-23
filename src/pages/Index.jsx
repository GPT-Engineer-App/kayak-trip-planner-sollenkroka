import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
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
        <Button
          colorScheme="teal"
          variant="solid"
          size="lg"
          leftIcon={<FaMapMarkerAlt />}
          onClick={() => alert("Map feature is under development. Stay tuned!")}
        >
          View Map
        </Button>
      </Flex>
      <Box mt={10}>
        <MapContainer center={[59.3706, 18.6984]} zoom={13} style={{ height: "500px", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[59.3706, 18.6984]}>
            <Popup>
              Sollenkroka
            </Popup>
          </Marker>
        </MapContainer>
      </Box>
    </Box>
  );
};

export default Index;