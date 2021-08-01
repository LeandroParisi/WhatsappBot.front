import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'assets/icons/Icon'
import CustomIcon from 'assets/icons/CustomIcon'
import { groupedIcons, customIcons } from 'assets/icons/iconsLib'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import contentTypes from 'libs/sectionTypes'
import styles from './EntityCardSection.module.scss'

const EntityCardSection = ({ section }) => {
  const {
    title, subTitle, icon, content: { type, values },
  } = section

  const contentFactory = () => {
    if (type === contentTypes.UNIQUE) {
      return (
        <p>{values[0]}</p>
      )
    }
    if (type === contentTypes.LIST) {
      return (
        <ul>
          {values.map((value) => <li key={value} className={styles.listItem}>{value}</li>)}
        </ul>
      )
    }
    if (type === contentTypes.ICONS) {
      return (
        <ul>
          {values.map((value) => {
            if (customIcons.has(value)) {
              return (
                <CustomIcon
                  icon={groupedIcons[value]}
                  className={styles.sectionIcon}
                  size="20px"
                  color="white"
                />
              )
            }
            return (
              <Icon
                icon={groupedIcons[value]}
                className={styles.sectionIcon}
                size="20px"
                color="white"
                key={value}
              />
            )
          })}
        </ul>
      )
    }
    return null
  }

  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <Icon
          icon={icon}
          className={styles.headerIcon}
          size="20px"
          color="white"
          noTooltip
        />
        <h2>{title}</h2>
        {subTitle && <h3>{subTitle}</h3>}
      </header>
      <section className={classNames(styles.content, styles[type])}>
        {contentFactory()}
      </section>
    </section>
  )
}

EntityCardSection.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    icon: PropTypes.instanceOf(FontAwesomeIcon).isRequired,
    content: PropTypes.shape({
      type: PropTypes.oneOf(...Object.values(contentTypes)).isRequired,
      values: PropTypes.arrayOf(
        PropTypes.oneOfType(
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.string),
        ),
      ).isRequired,
    }),
  }),
}

EntityCardSection.defaultProps = {
  section: {
    subTitle: '',
  },
}

export default EntityCardSection
