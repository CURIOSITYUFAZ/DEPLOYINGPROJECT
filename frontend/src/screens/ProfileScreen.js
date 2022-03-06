import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState("");
  const [company, setCompany] = useState("");
  const [type, setType] = useState("");
  const [numofemployee, setNumberEmployee] = useState("");
  const [phonenumber, setPhonenumber] = useState("")
  const [description, setDescription] = useState("")
  const [confirmPassword, setConfirmPassword] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [sellerLogo, setSellerLogo] = useState('');
  const [sellerDescription, setSellerDescription] = useState('');

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({ type: USER_UPDATE_PROFILE_RESET });
      dispatch(detailsUser(userInfo._id));
    } else {
      setName(user.name);
      setEmail(user.email);
      setCountry(user.country);
      setCompany(user.company);
      setType(user.type);
      setNumberEmployee(user.numofemployee);
      setPhonenumber(user.phonenumber);
      setDescription(user.description);

      if (user.seller) {
        setSellerName(user.seller.name);
        setSellerLogo(user.seller.logo);
        setSellerDescription(user.seller.description);
      }
    }
  }, [dispatch, userInfo._id, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Parol və təkrar parol eyni deyil');
    } else {
      dispatch(
        updateUserProfile({
          userId: user._id,
          name,
          email,
          password,
          country,
          company,
          type,
          numofemployee,
          phonenumber,
          description,
          sellerName,
          sellerLogo,
          sellerDescription,
        })
      );
    }
  };
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>İstifadəçi Profili</h1>
        </div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            {loadingUpdate && <LoadingBox></LoadingBox>}
            {errorUpdate && (
              <MessageBox variant="danger">{errorUpdate}</MessageBox>
            )}
            {successUpdate && (
              <MessageBox variant="success">
                Profilinz uğurla yeniləndi
              </MessageBox>
            )}
            <div>
              <label htmlFor="name">Ad</label>
              <input
                id="name"
                type="text"
                placeholder="Adınızı daxil edin"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Mail</label>
              <input
                id="email"
                type="email"
                placeholder="Emailinizi daxil edin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                placeholder="Country daxil edin"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input
                id="company"
                type="text"
                placeholder="Company daxil edin"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="type">type</label>
              <input
                id="type"
                type="text"
                placeholder="Type daxil edin"
                value={type}
                onChange={(e) => setType(e.target.value)}
              ></input>
            </div>
           

            <div>
              <label htmlFor="password">Parol</label>
              <input
                id="password"
                type="password"
                placeholder="Parolu daxil edin"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">Parolu təkrarlayın</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Parolu yenidən təkrar daxil edin"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Güncəllə
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
