import { PropTypes } from 'react';
import r, { div, h2, p, img, a } from 'r-dom';
import css from './styles.scss';

import GuideBackToTodoLink from './GuideBackToTodoLink';

const GuideListingPage = (props) => {
  const { changePage, initialPath, t, pageData, infoIcon } = props;

  return div({ className: 'container' }, [
    r(GuideBackToTodoLink, { changePage, initialPath, t }),
    h2({ className: css.title }, t('title')),
    p({ className: css.description }, t('description')),

    pageData.info_image ?
      div({ className: css.sloganImageContainerBig }, [
        img({
          className: css.sloganImage,
          src: pageData.info_image,
          alt: t('info_image_alt'),
        }),
      ]) :
      null,

    div({ className: css.infoTextContainer }, [
      div({
        className: css.infoTextIcon,
        dangerouslySetInnerHTML: { __html: infoIcon }, // eslint-disable-line react/no-danger
      }),
      div({
        className: css.infoTextContent,
        dangerouslySetInnerHTML: { __html: t('advice') }, // eslint-disable-line react/no-danger
      }),
    ]),

    a({ className: css.nextButton, href: pageData.link }, t('post_your_first_listing')),
  ]);
};

GuideListingPage.propTypes = {
  changePage: PropTypes.func.isRequired,
  initialPath: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
  infoIcon: PropTypes.string.isRequired,
  pageData: PropTypes.shape({
    link: PropTypes.string.isRequired,
    info_image: PropTypes.string,
  }).isRequired,
};

export default GuideListingPage;