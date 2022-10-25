import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../components/Header';
import { renderHeader } from '../redux/actions';

function FavoriteRecipes({ updateHeader }) {
  useEffect(() => {
    updateHeader('Favorite Recipes', true, false);
  }, []);
  return (
    <Header />
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateHeader: (pageTitle, profileIcon, searchIcon) => (
    dispatch(renderHeader(pageTitle, profileIcon, searchIcon))),
});

FavoriteRecipes.propTypes = {
  updateHeader: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(FavoriteRecipes);