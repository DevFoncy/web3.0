/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { pathServer } from '../../../lib/shared/constants/Strings';
import { FILTERS_PIZZA } from '../../../lib/util/Data';
import { scrollToSection } from '../../../lib/util/Util';

const DISTANCE_CONSTANT = 75;

const wFilters = React.forwardRef(({ className }, ref) => {
  const [selected, setSelected] = useState(1);

  const filters = Object.entries(FILTERS_PIZZA).map(([value, body]) => ({
    id: body.id,
    value,
    name: body.name,
  }));

  const onClick = (e, id) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY,
    };
  }

  useEffect(() => {
    const [a, b, c, d, e, f] = document.getElementsByClassName('product-category');
    const distanceB = getOffset(b).top - DISTANCE_CONSTANT;
    const distanceC = getOffset(c).top - DISTANCE_CONSTANT;
    const distanceD = getOffset(d).top - DISTANCE_CONSTANT;
    const distanceE = getOffset(e).top - DISTANCE_CONSTANT;
    const distanceF = getOffset(f).top - DISTANCE_CONSTANT;

    if (offset > 0) {
      setSelected(FILTERS_PIZZA.promociones.id);
      if (offset > distanceB && offset < distanceC) {
        setSelected(FILTERS_PIZZA.combos.id);
      } else if (offset > distanceC && offset < distanceD) {
        setSelected(FILTERS_PIZZA.pizzas.id);
      } else if (offset >= distanceD && offset < distanceE) {
        setSelected(FILTERS_PIZZA.pastas.id);
      } else if (offset >= distanceE && offset < distanceF) {
        setSelected(FILTERS_PIZZA.complementos.id);
      } else if (offset >= distanceF) {
        setSelected(FILTERS_PIZZA.bebidas.id);
      }
    }
  }, [offset]);

  return (
    <div className={`Filters ${className} from-lg`} ref={ref} id="Filters">
      <ul>
        {filters.map((f, index) => (
          <li className={`s-center ${f.id === selected ? 'selected' : ''}`} key={f.id}>
            <a className=" d-flex pointer" onClick={(e) => onClick(e, f.id)}>
              <img
                src={`${pathServer.PATH_ICONS}company/${index + 1}.png`}
                alt={f.name}
                className="icon"
              />
              <p className="font-bold s-pl-1">{f.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
});

wFilters.displayName = 'wFilters';

wFilters.defaultProps = {
  className: '',
};

wFilters.propTypes = {
  className: PropTypes.string,
};

export default wFilters;
