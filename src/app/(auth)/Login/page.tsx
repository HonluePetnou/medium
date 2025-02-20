import { Modal } from "@/app/Component/modal";
import {useState} from "react";

const [isOpenModal, setIsOpenModal] = useState(false);

const openModal = () => setIsOpenModal(true);
const closeModal = () => setIsOpenModal(false);

export default function Login() {
  return (
    <>
     <Modal isOpen={true} onClose={() => {}}>
       <div>Login into this website</div>                      
     </Modal>
    </>
  )
}
