import { useRouter } from "next/router";
import { Card, CardBody, Text } from "@chakra-ui/react";

const WineType = () => {
  const wineTypes = [
    "Red",
    "Rose",
    "White",
    "Dessert",
    "Sparkling",
    "Fortfield",
  ];
  const router = useRouter();

  const handleWineType = (type: string) => {
    router.push(`/search/${type.toLowerCase()}`);
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {wineTypes.map((type, index) => (
        <button key={index + type} onClick={() => handleWineType(type)}>
          <Card>
            <CardBody>
              <Text>{type}</Text>
            </CardBody>
          </Card>
        </button>
      ))}
    </div>
  );
};

export default WineType;
