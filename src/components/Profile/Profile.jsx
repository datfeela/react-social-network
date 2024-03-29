import styles from "./Profile.module.scss";
import Avatar from "./Avatar/Avatar";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import Preloader from "../_common/Preloader/Preloader";

import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import EditMode from "../_common/EditMode/EditMode";
import EditProfileForm from "./EditProfileForm/EditProfileForm";
import ProfileFriends from "./ProfileFriends/ProfileFriends";
import { AppContext } from "../../App";
import { checkScrollbar } from "../../utils/checkScrollbar";
import ProfileActions from "./ProfileActions/ProfileActions";

const Profile = ({ isInit, profileInfo, changeProfileInfo, authUserId, isAuth, profileStatus, updateStatus, posts, addPost, ...props }) => {
    const appContext = useContext(AppContext);

    useEffect(() => {
        checkScrollbar() ? appContext.setIsScrollbarActive(true) : appContext.setIsScrollbarActive(false);
    });

    useEffect(() => {
        if (isInit) document.title = `${profileInfo.fullName} | Feelanet`;
    }, [profileInfo]);

    const params = useParams();
    const currentUserId = params.userId ? params.userId : authUserId;
    const isOwner = params.userId == authUserId || !params.userId ? true : false;

    const initializeProfile = (targetID, isOwner) => {
        props.initializeProfile(targetID, isOwner);
    };

    useEffect(() => {
        if (!profileInfo || profileInfo.userId !== currentUserId) {
            currentUserId && initializeProfile(currentUserId, isOwner);
        }
    }, [currentUserId]);

    const [isEditModeActive, setIsEditModeActive] = useState(false);

    const activateEditMode = () => {
        setIsEditModeActive(true);
    };

    const deactivateEditMode = () => {
        setIsEditModeActive(false);
    };

    if (!currentUserId && !isAuth) {
        return <Navigate to={"../login"} />;
    }

    if (!isInit) {
        return (
            <div className={styles.preloaderWrap}>
                <Preloader />
            </div>
        );
    }

    if (isInit) {
        return (
            <div className={styles.wrap}>
                {isEditModeActive && (
                    <EditMode
                        ChildComponent={EditProfileForm}
                        authUserId={authUserId}
                        profileInfo={profileInfo}
                        changeProfileInfo={changeProfileInfo}
                        deactivateEditMode={deactivateEditMode}
                    />
                )}
                <div className={styles.columns_wrap}>
                    <div className={styles.column_side}>
                        <div className={styles.wrap_side + " wrap"}>
                            <Avatar isOwner={isOwner} photo={profileInfo.photos.large} />
                            {isOwner && (
                                <button className={styles.editModeButton + " button"} onClick={activateEditMode}>
                                    {appContext.currentLanguage === "eng" && "Edit profile info"}
                                    {appContext.currentLanguage === "ru" && "Редактировать профиль"}
                                </button>
                            )}
                            {!isOwner && <ProfileActions currentUserId={currentUserId} />}
                        </div>

                        {isOwner && (
                            <div className={styles.wrap_side + " wrap"}>
                                <ProfileFriends currentUserId={currentUserId} />
                            </div>
                        )}
                    </div>
                    <div className={styles.column_main}>
                        <ProfileInfo
                            userId={currentUserId}
                            profileInfo={profileInfo}
                            status={profileStatus}
                            updateStatus={updateStatus}
                            isOwner={isOwner}
                        />
                        <Posts posts={posts} addPost={addPost} currentUserId={currentUserId} />
                    </div>
                </div>
            </div>
        );
    }
};

export default Profile;
