import images from "@/images";
import Image from "next/image";
import SectionLayout from "../SectionLayout";

const BookAppointment: React.FC = () => {
	return (
		<SectionLayout>
			<div className="w-full h-full lg:pt-[12vh]">
				<div className="w-full h-full lg:h-96 p-6 pb-0 lg:py-0 lg:pl-[6vw] bg-gray-200 rounded-3xl flex flex-col lg:flex-row justify-between items-center gap-8">
					<div className="w-full lg:w-1/3">
						<p className="text-xl lg:text-2xl">Lorem ipsum dolor sit</p>
						<h3 className="text-3xl lg:text-5xl font-semibold leading-snug mb-5">
							amet consectetur adipisicing elit
						</h3>
						<p className="text-lg">Book Appointment</p>
					</div>

					<div className="w-full lg:w-2/3 lg:h-96 flex justify-center items-end">
						<Image
							src={images.img.img4}
							alt=""
							className="w-full lg:w-3/4 object-containject"
						/>
					</div>
				</div>
			</div>
		</SectionLayout>
	);
};

export default BookAppointment;
