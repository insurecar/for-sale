import { h } from 'preact'
import Linkifier from './Linkifier'

const SalesArguements = ({ salesArgument1, salesArgument2, salesArgument3 }) => {
  return (
    <div className="sales-args-container">
      <div className="sales-args-container__args">
        <div className="arg-item">
          <div className="arguments__item">
            <div className="arg-item__content">
              <Linkifier value={salesArgument1} />
            </div>
          </div>
        </div>
        <div className="arg-item">
          <div className="arguments__item">
            <div className="arg-item__content">
              <Linkifier value={salesArgument2} />
            </div>
          </div>
        </div>
        <div className="arg-item">
          <div className="arguments__item">
            <div className="arg-item__content">
              <Linkifier value={salesArgument3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalesArguements