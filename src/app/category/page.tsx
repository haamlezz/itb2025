import Image from "next/image";
import Watch from "../images/watch.jpg";
export default function CategoryPage() {

    return (

        <>
            <h1>ໜ້າປະເພດສິນຄ້າ</h1>
            <h2>ລາຍລະອຽດປະເພດສິນຄ້າ</h2>
            <Image src={Watch} alt="Watch" />
        </>
    );
}