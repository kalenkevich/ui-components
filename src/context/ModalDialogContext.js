// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import Slide from '@material-ui/core/Slide';
// import Dialog from '@material-ui/core/Dialog';
// import { makeStyles } from '@material-ui/styles';
//
// const ModalContext = React.createContext({
//   showModal: () => {},
//   hideModal: () => {},
// });
//
// export const ModalProvider = ModalContext.Provider;
//
// export const ModalConsumer = ModalContext.Consumer;
//
// let currentModalId = 0;
//
// const HIDE_TRANSITION_TIME = 1000;
// const styles = {
//   container: {
//     width: '100%',
//     maxWidth: '100%',
//     position: 'fixed',
//   },
//   root: {
//     width: '60%',
//   },
// };
//
// const useStyles = makeStyles(() => styles);
//
// function Transition(props) {
//   return <Slide direction='down' {...props} />;
// }
//
// const ModalPlaceholder = (props) => {
//   const { modals, onClose } = props;
//   const classes = useStyles();
//
//   return (modals || []).map(({ id, body, open }, index) => (
//     <Dialog
//       key={index}
//       open={open}
//       classes={{
//         root: classes.modalRoot,
//         paper: classes.modal,
//       }}
//       TransitionComponent={Transition}
//       keepMounted
//       onClose={() => onClose(id)}
//       aria-labelledby='notice-modal-slide-title'
//       aria-describedby='notice-modal-slide-description'
//     >
//       { body }
//     </Dialog>
//   ));
// };
//
// export const AppWithModal = ({ children }) => {
//   const [modals, setModals] = useState([]);
//
//   const removeModal = (modalId) => {
//     if (!modalId) {
//       throw new Error('Id should be provided for modal');
//     }
//
//     setModals(currentModals => (currentModals || []).filter(({ id }) => id !== modalId));
//   };
//
//   const hideModal = (modalId) => {
//     setModals((currentModals) => {
//       const index = (currentModals || []).findIndex(({ id }) => id === modalId);
//
//       if (index > -1) {
//         return ((currentModals || []).map((currentModal) => {
//           if (currentModal.id === modalId) {
//             return {
//               ...currentModal,
//               open: false,
//             };
//           }
//
//           return currentModal;
//         }));
//       }
//
//       return currentModals;
//     });
//
//     setTimeout(() => removeModal(modalId), HIDE_TRANSITION_TIME);
//   };
//
//   const showModal = (modal) => {
//     // eslint-disable-next-line no-plusplus
//     const id = currentModalId++;
//
//     setModals([...modals, { ...modal, open: true, id }]);
//
//     return id;
//   };
//
//   return (
//     <ModalProvider value={{
//       showModal,
//       hideModal,
//     }}>
//       <ModalPlaceholder
//         modals={modals}
//         onClose={id => hideModal(id)}
//       />
//       {children}
//     </ModalProvider>
//   );
// };
//
// AppWithModal.propTypes = {
//   children: PropTypes.node,
// };
//
// export default ModalContext;
