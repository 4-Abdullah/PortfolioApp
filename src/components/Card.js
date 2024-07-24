// import { Heading, HStack, Image, TagLeftIcon, Text, VStack } from "@chakra-ui/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import React from "react";

// const Card = ({ title, description, imageSrc }) => {
//   // Implement the UI for the Card component according to the instructions.
//   // You should be able to implement the component with the elements imported above.
//   // Feel free to import other UI components from Chakra UI if you wish to.
//   return (
  
//     <HStack >
//       <VStack  className="Card_style">
//         <Image src={imageSrc} border-radius="10px"
//     width="100%" />
//         <div className='div_style'> 
//         <Heading size='md' p={'5px'} >{title}</Heading>
//         <Text className="text_style" p={'5px'}>{description}</Text>
//         <HStack  p={'5px'}>
//             <div className="veiw_more">See more</div>
//             <FontAwesomeIcon icon={faArrowRight} size="1x"/>
//         </HStack>
//         </div>
//       </VStack>
//     </HStack>

//   );
// };
// export default Card;

// import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; 
// import React from "react"; 
 
// const Card = ({ title, description, imageSrc }) => { 
//    return ( 
//      <VStack 
//        color="black" 
//        backgroundColor="white" 
//        cursor="pointer" 
//        borderRadius="xl" 
//      > 
//        <Image borderRadius="xl" src={imageSrc} alt={title} /> 
//        <VStack spacing={4} p={4} alignItems="flex-start"> 
//          <HStack justifyContent="space-between" alignItems="center"> 
//            <Heading as="h3" size="md"> 
//              {title} 
//            </Heading> 
//          </HStack> 
//          <Text color="#64748b" fontSize="lg"> 
//            {description} 
//          </Text> 
//          <HStack spacing={2} alignItems="center"> 
//            <p>See more</p> 
//            <FontAwesomeIcon icon={faArrowRight} size="1x" /> 
//          </HStack> 
//        </VStack> 
//      </VStack> 
//    ); 
// }; 
 
// export default Card; 

import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <HStack
      spacing={4}
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      className="Card_style"
    >
      <Image src={imageSrc} borderRadius="lg" width="40%" />
      <VStack align="start" spacing={3} width="60%">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <HStack spacing={2} align="center">
          <Text color="blue.500" cursor="pointer">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="blue.500" />
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Card;
