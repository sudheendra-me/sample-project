declare module 'react-native-vector-icons/Icon' {
    import {Component} from 'react';
    import {TextStyle} from 'react-native';
  
    interface IconProps {
      name: string;
      size?: number;
      color?: string;
      style?: TextStyle;
    }
  
    class Icon extends Component<IconProps> {}
    export default Icon;
  }
  
  declare module 'react-native-vector-icons/MaterialCommunityIcons' {
    import Icon from 'react-native-vector-icons/Icon';
    const MaterialCommunityIcons: typeof Icon;
    export default MaterialCommunityIcons;
  }
  
  declare module 'react-native-vector-icons/FontAwesome' {
    import Icon from 'react-native-vector-icons/Icon';
    const FontAwesome: typeof Icon;
    export default FontAwesome;
  }
  
  declare module 'react-native-vector-icons/Ionicons' {
    import Icon from 'react-native-vector-icons/Icon';
    const Ionicons: typeof Icon;
    export default Ionicons;
  }
  
  declare module 'react-native-vector-icons/AntDesign' {
    import Icon from 'react-native-vector-icons/Icon';
    const AntDesign: typeof Icon;
    export default AntDesign;
  }
  
  declare module 'react-native-vector-icons/Entypo' {
    import Icon from 'react-native-vector-icons/Icon';
    const Entypo: typeof Icon;
    export default Entypo;
  }
  
  declare module 'react-native-vector-icons/Feather' {
    import Icon from 'react-native-vector-icons/Icon';
    const Feather: typeof Icon;
    export default Feather;
  }
  
  declare module 'react-native-vector-icons/EvilIcons' {
    import Icon from 'react-native-vector-icons/Icon';
    const EvilIcons: typeof Icon;
    export default EvilIcons;
  }
  