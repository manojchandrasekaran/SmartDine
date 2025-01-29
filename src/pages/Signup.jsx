import { useForm } from "react-hook-form";
import { instance } from "../api";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await instance.post("/auth/signup", data);
    console.log("Data=", response);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="hotel_name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
             Hotel Name
            </label>
            <input
              type="text"
              id="hotel_name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your Hotel Name"
              {...register("ho_name", { required: true, minLength: 3 })}
              aria-invalid={errors.ho_name ? "true" : "false"}
            />
            {errors.ho_name?.type === "required" && (
              <p role="alert">Hotel name is required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="hotel_address"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Hotel Address
            </label>
            <textarea
              rows= "3"
              id="hotel_address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your Hotel Address"
              {...register("ho_address", { required: true, minLength: 5 })}
              aria-invalid={errors.ho_address ? "true" : "false"}
            ></textarea>
            {errors.ho_address?.type === "required" && (
              <p role="alert">Hotel Address is required</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your Name"
              {...register("ad_name", { required: true, minLength: 3 })}
              aria-invalid={errors.ad_name ? "true" : "false"}
            />
            {errors.ad_name?.type === "required" && (
              <p role="alert">User name is required</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email ID
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your Email ID"
              {...register("ad_email", { required: "Email Address is required" })}
              aria-invalid={errors.ad_email ? "true" : "false"}
            />
            {errors.ad_email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your Password"
              {...register("ad_password", { required: "Password is required" })}
              aria-invalid={errors.ad_password ? "true" : "false"}
            />
            {errors.ad_password && <p role="alert">{errors.ad_password?.message}</p>}
          </div>
          

          <div className="mb-4">
            <label
              htmlFor="City"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your city"
              {...register("ad_city")}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNum"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNum"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="eg: 9XXXXX XXXXX"
              {...register("ad_phone_num", {
                required: "Phone Number is required",
                validate: (value) => {
                  const val = new RegExp(/^[6-9][0-9]{9}$/).test(value);
                  if (!val) {
                    return "Phone Number is invalid";
                  }
                },
              })}
              aria-invalid={errors.ad_phone_num ? "true" : "false"}
            />
            {errors.ad_phone_num && <p role="alert">{errors.ad_phone_num?.message}</p>}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
