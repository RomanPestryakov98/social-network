import MyPostsContainer from './MyPosts/MyPostContainer';
import './Profile.css';
import photoUser from '../../image/user.jpg';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import { useParams } from "react-router-dom";
import ProfileData from './ProfileData/ProfileData';
import React, { useState } from 'react';
import ProfileDataForm from './ProfileDataForm/ProfileDataForm';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';



function Profile(props) {
	const params = useParams();
	const [editMode, setEditMode] = useState(false);

	const [defaultFileList, setDefaultFileList] = useState([]);

	const handleOnChange = (info) => {

		if (info.file.status !== 'uploading') {

			setDefaultFileList(info.file);
		}
		if (info.file.status === 'done') {
			message.success(`${info.file.name} file uploaded successfully`);
		} else if (info.file.status === 'error') {
			message.error(`${info.file.name} file upload failed.`);
		}


	};

	function onMainPhotoSelected(options) {
		const { onSuccess, file } = options;
		return props.savePhoto(file)
			.then(() => {
				onSuccess('OK')
			})
	}

	return (
		<div className="main__profile profile">
			<div className="profile__data">
				<div className="profile__left">
					<div className="profile__img">
						<img src={props?.profile?.photos?.large ? props?.profile?.photos?.large : photoUser} alt='avatar' />
					</div>
					{!props.isOwner &&
						<Upload
							accept="image/*"
							customRequest={onMainPhotoSelected}
							onChange={handleOnChange}
							listType='picture'
							defaultFileList={defaultFileList}
						>
							<Button icon={<UploadOutlined />}>Click to Upload</Button>
						</Upload>
					}
					<ProfileStatus {...props} />
				</div>
				<div className='profile__right'>
					{!editMode
						?
						<ProfileData profile={props.profile} onEditMode={() => { setEditMode(true) }} />
						:
						<ProfileDataForm profile={props.profile} onUpdateProfile={props.onUpdateProfile} onEditMode={() => { setEditMode(false) }} />
					}
				</div>
			</div>
			{!params.userId && <MyPostsContainer />}

		</div>
	);
}

export default Profile;


