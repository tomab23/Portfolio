import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const LinkMyProjects = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/projects')
    }
  return (
      <a onClick={handleClick}><i className="hover:underline cursor-pointer">{t("about.myProjects")}</i></a>
  )
}

export default LinkMyProjects
