import { IoSearch } from "react-icons/io5";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" color="gray.300" fontSize="1.2em">
        <IoSearch />
      </InputLeftElement>
      <Input placeholder="Search any wine" size="lg" />
    </InputGroup>
  );
};

export default SearchBar;
