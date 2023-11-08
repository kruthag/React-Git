import {BadgeCheck,AlertOctagon,Bell,CheckCheck,BadgeIndianRupee,BadgeDollarSign,BadgeEuro, BadgeJapaneseYen, BarChart, BarChart2, BarChart3, BarChart4, Bluetooth, BluetoothSearching, BluetoothConnected, BluetoothOff} from 'lucide-react';
const Table=()=>
{
    return(
        <>
        <table border='1' className='table'>
            <tr>
                <th>Badges</th>
            
                <td>Badge Check<BadgeCheck/></td>
                <td>Alert Octagon<AlertOctagon/></td>
                <td>Notification<Bell/></td>
                <td>Double Check<CheckCheck/></td>
            </tr>
            <tr>
                <th>Money</th>
                <td>Rupee<BadgeIndianRupee/></td>
                <td>Dollar<BadgeDollarSign/></td>
                <td>Euro<BadgeEuro/></td>
                <td>Yen<BadgeJapaneseYen/></td>
            </tr>
            <tr>
                <th>Graphs</th>
                <td>Bar1<BarChart/></td>
                <td>Bar2<BarChart2/></td>
                <td>Bar3<BarChart3/></td>
                <td>Bar4<BarChart4/></td>
            </tr>
            <tr>
                <th>About Bluetooth</th>
                <td>Blue<Bluetooth/></td>
                <td>Searching<BluetoothSearching/></td>
                <td>Connected<BluetoothConnected/></td>
                <td>Disconnected<BluetoothOff/></td>
            </tr>
        </table>
        </>
    )
}
export default Table;