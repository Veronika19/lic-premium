import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addPolicy } from '../actions/policyActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Flash from '../flash';

const schema = yup
  .object({
    first_name: yup.string().trim().required(`Please enter first name`),
    last_name: yup.string().trim().required(`Please enter last name`),
    policy_number: yup
      .number()
      .positive('Enter a positive number')
      .integer('Should be a whole number')
      .typeError('Enter the policy number'),
    date_of_commence: yup.date().typeError('Enter a valid date'),
  })
  .required();

const AddPolicy = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log('datttaaa', data);
    dispatch(addPolicy(data, navigate));
  };

  return (
    <>
      <div className="container mx-auto px-5 sm:px-10">
        <div className="flex flex-wrap">
          <Flash />
          <div className="w-full mt-10">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="policy_number"
                >
                  Policy Number
                </label>
                <input
                  {...register('policy_number')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="policy_number"
                  type="text"
                  placeholder="Policy Number"
                />
                <p className="text-red-500 text-xs italic">{errors.policy_number?.message}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
                  First Name
                </label>
                <input
                  {...register('first_name')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstname"
                  type="text"
                  placeholder="Firstname"
                />
                <p className="text-red-500 text-xs italic">{errors.first_name?.message}</p>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
                  Last Name
                </label>
                <input
                  {...register('last_name')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastname"
                  type="text"
                  placeholder="Lastname"
                />
                <p className="text-red-500 text-xs italic">{errors.last_name?.message}</p>
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="date_of_commence"
                >
                  Date of Commence
                </label>
                <input
                  {...register('date_of_commence')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="date_of_commence"
                  type="date"
                  placeholder="Date Of Commence"
                />
                <p className="text-red-500 text-xs italic">{errors.date_of_commence?.message}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="table_term">
                  Table Term
                </label>
                <input
                  {...register('table_term')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="table_term"
                  type="text"
                  placeholder="Table Term"
                />
                <p className="text-red-500 text-xs italic">{errors.table_term?.message}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pay_mode">
                  Pay Mode
                </label>
                <input
                  {...register('pay_mode')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="pay_mode"
                  type="text"
                  placeholder="Mode Of Payment"
                />
                <p className="text-red-500 text-xs italic">{errors.pay_mode?.message}</p>
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="premium_amt">
                  Premium Amount
                </label>
                <input
                  {...register('premium_amt')}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="premium_amt"
                  type="text"
                  placeholder="Premium Amount"
                />
                <p className="text-red-500 text-xs italic">{errors.premium_amt?.message}</p>
              </div>
              <div className="flex items-center justify-between">
                <input
                  className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                />
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPolicy;
