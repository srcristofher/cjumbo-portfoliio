/*
████████╗██████╗  █████╗ ███╗   ██╗███████╗██╗████████╗██╗ ██████╗ ███╗   ██╗
╚══██╔══╝██╔══██╗██╔══██╗████╗  ██║██╔════╝██║╚══██╔══╝██║██╔═══██╗████╗  ██║
   ██║   ██████╔╝███████║██╔██╗ ██║███████╗██║   ██║   ██║██║   ██║██╔██╗ ██║
   ██║   ██╔══██╗██╔══██║██║╚██╗██║╚════██║██║   ██║   ██║██║   ██║██║╚██╗██║
   ██║   ██║  ██║██║  ██║██║ ╚████║███████║██║   ██║   ██║╚██████╔╝██║ ╚████║
   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
*/
import { TransitionObject } from '../types/app';
//-- Login of how to Organize the Components within the Main
const setOrder = (pathname: string | ''): TransitionObject => {
  switch (pathname) {
    case '/projects':
      return {
        aboutPosition: '100%',
        aboutDisplay: 1,
        projectsPosition: '0%',
        projectsDisplay: 3,
        contactPosition: '-100%',
        contactDisplay: 2,
      };

    case '/about':
      return {
        aboutPosition: '0%',
        aboutDisplay: 3,
        projectsPosition: '-100%',
        projectsDisplay: 2,
        contactPosition: '100%',
        contactDisplay: 1,
      };

    case '/contact':
      return {
        aboutPosition: '-100%',
        aboutDisplay: 2,
        projectsPosition: '100%',
        projectsDisplay: 1,
        contactPosition: '0%',
        contactDisplay: 3,
      };

    default:
      return {
        message: 'This is an error message',
      };
  }
};

export default setOrder;
