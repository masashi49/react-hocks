//  このファイルは、createContextを実体化しただけのもの
//　データを提供したいコンポーネント（provider:提供）
//　そのデータを使用したいコンポーネント(consumer: 使用者)
// 共有したいデータを使痛い時、contextを使用する。

import { createContext } from "react"

const AppContext = createContext()

export default AppContext
