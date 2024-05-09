import MadrashaTitle from "@/components/madrash-title";

export default function Home() {
  return (
    <main>
      <MadrashaTitle />
      <div
        dir="rtl"
        className="container p-2 mx-auto sm:p-4 text-gray-100 bg-gray-900"
      >
        <h2 className="mb-3 text-2xl font-semibold leading-tight text-center">
          نتائح الطلاب لاختبار الفترة الأولى
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg bg-gray-700">
              <tr className="text-center">
                <th title="Ranking" className="p-3 text-right">
                  الأرقام
                </th>
                <th title="Team name" className="p-3 text-center">
                  الأسماء
                </th>
                <th title="Wins" className="p-3">
                  W
                </th>
                <th title="Losses" className="p-3">
                  L
                </th>
                <th title="Win percentage" className="p-3">
                  Win%
                </th>
                <th title="Games behind" className="p-3">
                  GB
                </th>
                <th title="Home games" className="p-3">
                  Home
                </th>
                <th title="Away games" className="p-3">
                  Away
                </th>
                <th title="Last 10 games" className="p-3">
                  L10
                </th>
                <th title="Current streak" className="p-3">
                  Streak
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center border-b border-opacity-20 border-gray-700 bg-gray-800">
                <td className="px-3 py-2 text-center">
                  <span>11</span>
                </td>
                <td className="px-3 py-2 text-center">
                  <span>NYK</span>
                </td>
                <td className="px-3 py-2">
                  <span>23</span>
                </td>
                <td className="px-3 py-2">
                  <span>26</span>
                </td>
                <td className="px-3 py-2">
                  <span>.469</span>
                </td>
                <td className="px-3 py-2 text-center">
                  <span>8.5</span>
                </td>
                <td className="px-3 py-2">
                  <span>12-14</span>
                </td>
                <td className="px-3 py-2">
                  <span>11-12</span>
                </td>
                <td className="px-3 py-2">
                  <span>4-6</span>
                </td>
                <td className="px-3 py-2">
                  <span>L2</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
