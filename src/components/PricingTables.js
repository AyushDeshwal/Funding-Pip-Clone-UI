import { ARROW_PNG, INFO_PNG } from "../utils/constants";

const PricingTables = () => {
    return (
        <div className="trading-tables ">

            <div className="tab-headings">

                   <div className="heading1">
                 <hr></hr>
                  <h4>Evaluation stage</h4>
                   <hr></hr>
                   </div>

                  <div className="heading2">
                  <hr></hr>
                 <h4>Funded stage</h4>
                   <hr></hr>
                    </div>

             </div>

          <div className="tables">

          <div className="tab1">
            <table>
                <thead>
                  <th></th>
                  <th id="orange">Student</th>
                  <th id="green">Practitioner</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="col1"> {">"} Trading Period</td>
                        <td>∞</td>
                        <td>∞</td>
                    </tr>
                    <tr>
                        <td className="col1"> {">"} Minimun Trading Days</td>
                        <td>0 days</td>
                        <td>0 days</td>
                    </tr>
                    <tr>
                        <td className="col1"> {">"} Maximum Daily Loss</td>
                        <td>5%</td>
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td className="col1"> {">"} Maximum Loss</td>
                        <td>10%</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td className="col1"> {">"} Profit Target</td>
                        <td>$8.000 (8%)</td>
                        <td>$5.000 (5%)</td>
                    </tr>
                    <tr>
                        <td className="col1"> {">"} Leverage</td>
                        <td>1:100</td>
                        <td>1:100</td>
                    </tr>
                </tbody>
            </table>
            </div>

          <div className="tab2">
            <table>
                <thead>
                  <th></th>
                  <th id="voilet">Master</th>
                </thead>
                <tbody>
                    <tr>
                        <td className="t2col1">{">"} Trading Period</td>
                        <td>∞</td>
                    </tr>
                    <tr>
                        <td className="t2col1">{">"} Maximum Daily Loss</td>
                        <td>5%</td>
                    </tr>
                    <tr>
                        <td className="t2col1">{">"} Maximum Loss</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td className="t2col1">{">"} Profit Target</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td className="t2col1">{">"} Leverage</td>
                        <td>1:100</td>
                    </tr>
                </tbody>
            </table>
            <button>Refund + Profit Splites<img src={INFO_PNG}></img> </button>
             </div>

             </div>  

            
            
            
        <div className="deal-offer">
            <div>
            <text id="dollar">$</text>
            <text id="number">399</text> <br></br>
            <text id="amount">For 100k account</text>
            </div>
            <span className="btn-img"><img className="btn-icons" src={ARROW_PNG}></img> <button >Buy challenge</button> </span> 
        </div>
             


        </div>
    )
}

export default PricingTables;