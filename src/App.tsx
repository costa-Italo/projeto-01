import { Header } from './components/Header';
import { Post, PostType } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUREhgSEhISEhIRGBIRGBESEhESEhIRGBkZGRkYGBgcIS4lHx4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjEnISs0NDQxMTE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0MTQ0NDQxNDQ0NDQ0NDo0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAUGB//EAD8QAAIBAgMFBQYDBgQHAAAAAAECAAMRBBIhBTFBUWEGInGBkRMyQqGxwVLR8CMzYnKC4RRDkvEHFSRTc7LC/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEEAgMF/8QAIhEBAQEAAgICAgMBAAAAAAAAAAECAxESITFBBCIyUWFC/9oADAMBAAIRAxEAPwD54JQMgGUJSwuO8kGOMLEckSoyOAigIEq8cmMRsnHFCAOEQjjBGEJlw9B3bJTVnY/CoLHx04a74ExxT1eB7DYioud6lOmN5UtmcDrqAPWb47F0FH7TEVBbewFNU8BvHzmbvMHVeFtEZ6vG9ncOnu1qhA6qfmEI+s1qfZpXFxVany9pTJBH82n0mpvI8a84TJnTx+xKtLW3tE/Egb5qRf6zm2mpe2ehC8IpoEYozEYAojHFaAEUcIAojHEYARGOIwMQhCAIRiSJQk7soCVIEqAqo5MqaJQjkxwIxHJEYjZOAhCAOMRCdTZGxnxJB92n8TkqBa9tL6QtkndHXd9NfAbOqYhstNC265+FRe1yZ77ZFFcIAiU1Y2F6hBu7aXNtNNNL+QnTwGzqdKkKVOooA4ISdTz4knnxmx/hrghGZzxy5QB0NuHnIuTmtvX0ozxyRlwxFZfeKk6WLb79Ba0b7MAXvPUTf36Q9p4XuL3mqmzqid5AL7iGJUW8eUw4oMBarY9BlYX8zujzrtjWeq1dpUqYJU13v1FRSR1GfWc3EYmklP3M5Gl0a5t1AQt6zWxZcFsrkob90lVT/SL+t7zlYnBO4z023b0JJyno28j8p2z/AKXiw1to3bNTY5R8LEEeB5edpqVqa1jmWytx53/iH3mU7MepctlBFhmDDMPG28TTo4W7HJUsy33gi4HT0m5embmNWrTKMVYWP16iQZ18XsjEImaogdRqHRlew5kDUAzjztnXk52dAySZUmaIRRwgChCEAJJjgYAoQhAyhHCAY5Qkxgyd2WJQkCMGKCqlXkSpolRiTHGFgwkx3jYO8IgYCAZ8LSzuqXtnIW9r2v0ns8DiEoqtO5yqLlLrmdjxewtqBu1+88fs6rkqBuIDWtbRiDYz13ZzACrXNRxdKY06uTr9JJ+Tu56ingxNe3oae16KqAquABou/ILbgxW9uhM0X26LnLfXS6F8x6e4LeAnp6OFQ/ALeEyHApvyKPSRefarwzl5BsZXq7hb+YufytITA1G3sw8Ga3oTPaLhEG5APKYa1ADcOfKbnJYOs/08sNnsN+vjxlUsLZSpHXdpO3UQfoTE46TpnkrlvEseVx2EtcKNRu/L9flbzWIcC7qbOpv6cPMX9BPouPw3dvb036/eeC2nhj7QkDR9SBuvxt56jxE74t1XHXUUu12XI4Oi5b/+M2B9D8pxsQ4ZmYC3e1Xda/G3IzPTwpF105dLn4fA8PTeJhGFZb66jS1/eUW+mk758s1x142MEIyLb4pQ5FCEIARRxGAEUIjAAwhCBiEIQDCJUiUDJ1CxGJIjBgyuOQDGIyWDHeRHGFAxgyI42ViMSRHeMmSmbEHqJ9X2VQFKkiga2ux435GfLMEL1EB4ug+Yn1age4unC/UDxnn/AJt+Is/EnuutQe4G6x43M2s/h6/eaWGN1Atu04jTnNkjxB85FFOvkmqHmNOn1vNeo9/iv4ZfsJmZfDz8+cwVXAsL666Cbhems58fTj6TAtUX4eRv8t8yYh+Nhy8POcytWAY7tNP16Tpkq6hOYW330sbceE81tnBfGNN9/wA/z8/EdlK1vIDz4feTWUOLk35/nK+C9VJzR832m5NiLq693TcwJkUqbPrdgeOoPeA58dOM9FtXZtnJTfwJPPrxE5gwLKpuQp1+LQjjb5Svqpu3GxG/xHX5zFNrFqBx1HpbpNabjJQjijAMUIGAKDRGEAIQEZgZQhCAa4MsTEDLBk6hcoSY7wZUDHIEcIFQvFCaJcYkAyo2VRiTeMQJlptZgTpYqb+Bn0zAbYoZczVl3kZVDVCRc690GfKqVJsjvoXRqSjNewVs5J88gHrPUdnqtSrTSipC1Hd1DZiQqAZjY8N/rbdIfyP292fCzgnjepXta3abD0/jaw+NldAf9Sj6zbw23KVRMwdMp4h18zv6zymP2DiC4FJwUG8u92Ym1r66AEHcNbzS2b2VpV8XWTEKf2aUn7hyjM5Omg6Eya5zJ8qJbfb0GO7TXYpR/bEC5ZCuVR1a9h4Tn1NrVtAalNWYXFNLu4UDedAFHUm051XBDBVq2Gpg5HVKlMk3JTvBhfoSfWdjsxsFSFLMTY3sbd8jdnvv14cNJvWc5zKzL5Wy/TmY3aLoQrYikHYAhWSopbXgcwU2PEGcXH7cxNPvEU3FyM2Vwc1txBOk99tbYFFqhquO+RYgNYEcQdL2NhcXtpPN7a2WoCAKAGq0FCW4Z9d+trEzrjxs9Matcmv2gxauFo0xVRlRwVpVW3gEi4PAgzOu1tpNa2Fyg7s+VND/ADGerZfZ0wDcHTxAPDcdNZiarfXfuOpPlN5177kc959OKUxVSwbJTcZXF6lw3410G7jpzjTY9gWZ2Y66L3Rpv851XN7kg5UBsBvOl9OsmnjFenmQnuhu6wytqMpv1E7a5Lfhzxmf08HigQ7A71JX0JEwkzc2qLVntxIJ6MQC3zJmnKc/ETanVoiEcU0RyTHJgAYhHCABhAQMAIQhA2mDLUzGJQkqhlBgJKmVNMqEd5AlQCoSZUZGJV5IjE0VVeMGRGIE2MOb5k/GMo/nBunrqv8AVPYdgqfdZzpld1sd4Nk+c8TPa9mMJUrUlanXemQzhjZXJIOh7wOtsvGS/lesqfxvenq8Y9ZrgFKagXzEkED00nP7MrdqtfvEVnGQtvaii5Eb+rVvBhIxexajsBUxT1FG9alsh8UFlI8RO7hKVkuTewtm59fXlPO7+l3XTzvaHCHEgOlhWoHMmujDijdCPtHsfaNL2eWo/wDhqigDLUPsyT0J0I6iZ8XmFayGwI1m5h6qX9nUCm9rEi485Rr+HTj1+yv+Y02XTEU3O6yBqjnyS5+s5lan7WpTcqy06LNVzVLJUrVCpVbJvCjMT3rG4Fp3jg6YW690dCZyMfTynu7vGZweo1cZiA4PPnwI00tw1vNOm1hbfw9N8skb7a8RMBFje5N7btJ3npyvt0adRR3iQFXvEndYb/oZxqDAVKlSmSKC5yCfiJXWw5bz6zeWmCCp7ysAbHS4vr+us1O0DrSw5CWGcezAH8W/5Xms96vTPrMteOd8zFjvYlj4k3kQhPQiGiBihGQvFeBiEDOEIjAHCEIAQhCAaMoSRKElUKUygZjEsTQUDKBkwEIyuEIRkoRiIRiaFMRiKAgysT2XYjGhab0+KsHHgwA/+Z4u86/ZrEZMQoPu1L0z4nVfmAPOcefPlx124NePJLXr/wDEPiqxpIWFNbGo40svK/MztY6rUpplpU2deakHL43mnRwxpIz0xo7FmHM2A19PnNinthEYCo2UkbiCDY/aeTm9X09TXd+HlMfi2qN7NmqpcgkoTTbTkRrOrshMzAsWKgEd/XSbW0MdhlNyQc1zfSaP/O6Q9xyTyCsx+Usm7rPUiW8dze3onJQe93OZ+HxPLrObj64YdOYnPo46tUcKqsqneXXKpHQb79Ju4vDBFC877h5/2nPM8b015dxpOMug46nxHOQo4cvp4+Ut20DcwPmJjRxrx3aTtI5avR1AQwIaxUE+XEeGonjdo49673ewC3CoNyj7mesrva54kG/D9bp4VHDk5Tc6m3HrpKeHM77T81vSojFCVJhCEIAQgYQMrxwhACKEIAQihAmnGDJBjkqlQlAyBKBgFXlCTAGahVYMoSBKBjZWI5IjjgMRxCE0yoSkcqQQbFSCDyI1EgRxB9P2ftD2lJKikWcAkD4W+JfW83VxCqcxAI32OonznYe1TQYo/wC6qb+ORuDD7z3mAZKtMG97ADQ3vbl5TyOfhuNf49bh5ZvP+t5toIR+6pg8woE16jg/hQHkB9ZvgIqWCgC3MkzXbJvIuOXWPFZ3PTWBUkZbaahtZrY6td7HTT+8rHYkKNBz8pxGxwZ8puvG3MeM7zPvycfL102KrbgOQ8pKIf1u85dMHed54chwlK2p+/PnOkjnq91qYlrnXTTU+GpnJ7H9nrA4msPeDCmp/CbgsfEGwE72HwPtnu37pd+8Zz+EdOfpznaYcBuGn5Svg4v+ql5uX/mPllamUZkO9CVPiDaROz2qwuTEFgLB1D/1bj9B6zjTtZ7cpfRQjiiMGEIjAHEYXiJgDiMCYQMQivFAmkDKBmMSxJVKwZSmYxKEAq8AYoCahVYMoGQJUbKwZV5jBjvHAyAxyBKjZpgxxQEZGJ6PsfjXFZcOi5xWJstwMrAEk3PCwN/CefWkx4euk9f2EwWR62KOow9JgLD/ADH7oN+gDes483jc2V245rOu42do7ZZLrlZdbXbQeEwUtsMRorN1A0+swq6PiGpOBauudCeFRd69br/6ToYDZuRu5Yjiu70kObmeqv1L16c58bnPeNvUTLToDOdPdCjXnvmxtHBqHQaWve3hrNHH7RyOUpjMxOgAJJbcAAJ28vpwmfttY7FLTW7sB9TNjZWGqVh7Sopp0zqF/wAx15/wj5+EeyOzZBGIxneq71onVafItzbpuHjO5Wb78AfpLOHj791HzcvX65QLAZQAAugA0sJJH6/X69YX/W/rOdtjaS4WmXc9FT4nbgolfwkktvUcLtzXVBTvYuWbu31yW1PrlnmFN9RNDaOOfEVGqVDdm4cFXgo6CYaFdlO+S65P2XZ4f16vy6piipVMw1mQry9OM1NSueuLWURGURJJmnMRQgYBMIQMYEIQgHPEoGSIxJVKxLEiMGAXC8kRxxlQMd5Md4wq8tFJ3AnwmXC4XPqfd+s3iAtgoAEzddOmeK69tNMMx6eJmRcOL2JJ8LCbBNiBzNoM1iZnzrtOHM/1C0VHCZQoHC0SCUTc2mbq10mMz4gnRO2q2Ep06dHc7irUTQe3uwUU2Y7lyrb+omc8dOEW2aoSnTcgbiP6lL2+gmfstz9W52rYU3pvTbMqOjo43NTYXU36gier2diDUyspBDrr48J4zB02xmC9mwAqUAArH46bMSP9LEDwYTo9kMU37pwwKXDE6EBfvuHiROPJi2zxPG51bXSrUataoCBlRWILucq24gcWPgPG0x7Tc4B1r0UHtA2r1FDFl1ugv7o6rr1nbXEG9wbte+lyB0nn+0YeqNSWY8SdZ6WPxs5z3fdQb/J1rXU9R6fBbWXFUkqqCA490kEqwuCvkflE7Xnm+x7ZFekfhIcXv8Qyt6WX1nfq1QoJJAUXJJOgHEm/Df8Arf24rLntPyZs10nE4laSM7sFRBck62A5fL5dJ8t23tZ8XVLm4Qd1Evoi/meP9ptdptuHEvkQkUUOnDOfxt9h58ZxlScebk79RVwcPU8r8ptKVZkRJWWTWq/FWGYjSdCkLzn011m2tY7l/vCUeLZZedvAndMbUxwPkZdJN15boP7TedWOeuLOvlpsLSZtsg3GYHpgbiCPmJ2zqVLriuWOEDFNuRwihANCAiEYkylkhIvKEAoSpAlQChMuHpF2sP8AYTCJ2MHRyLfi2p/KGtdRrGPLSqRBAtwAUjkRJtd5FMZajDg2Vul72P2jpNep0BI4zjFlgdv2ijlr5CA7zeEgt+0dtbKAnmdZnopYX84yWdB4wburfnAanWYcU9yFHGBstE6XMx7XpNWp0aaC7M9RAObdy3zeW2gtPV/8NsOr4p2dQxppdL6hGYjMR1ICi/Sc7evZbn6vQv2ZSmhpUsoPszTUtuLW0JtrvA9JGyezxwzM9dlLVAi5kJIIUm4JNuY16CemqDvX5fr9eM5G28VmcIDogt58fn9Jv8fN1tHy76zZ/bE9JD7o/uLf2mjisGHORRq2g5k62PzmdBYZj+m03fIzYxlVcJSL1Dao43f9tDqEHW89DWuv1iTGe728nWT/AA+MSnT1UhlYjcS2l78rhZ5rtZ2gNZjQonuA2dh/mEcB/CPn4bzbm2Xquy0zbPozjgvK/KcRKIUaaniZNeTqXM+FueHys1r5a1KjNhUmYJB9Jy7UzPTEwjRY1W/WFVwNB/vF20l34CbGFS+pmsi8TNpXyiHZdNxWA8vlNWvjQNB6mamIxXwj0hRogDNU8kv8zNz0529/Bpnqamyp+JuXQTFVfKe4Tpx0l18QW0Gg5TXYTUKxuI+YX9R1lTBhm0I8DMpMoze4h3nrVh3hFeEbDREcISZSBGDCEAoGUDCEA2sBSztruXX8p1G+XzhCctfKrh/iwlu+L79V9dftJwnvNfg7fQfnHCYjr/SKQvc8Wdj5Du/b5zahCbJSfSa1HVyTwhCA+1ubz13/AAzf/q3HOmW9Co+8ITnocn8a+jVrgErqToL23ndf9cJ5zFBKLgVW77nkzAXty37x6QhKfxfivN5vp06VJUU1n1FP3V5tzPhrPl3afbrYmqbE5QdBqL34n8oQi3b1XbgzPJ57oPM84KIoTksVMcIRUzqNkFuJmFFJ1MIR/TP2zpz5TUr1iTlG86QhHC38KAFLX3nPHgPCQMzm5P8AtCE1GIZsu7U85idrwhNwqy4Y75nhCd8/CPl+RCEJpzf/2Q==',
      name: 'Bill Gates',
      role: 'Microsoft'
    },
    content: [
      { type: 'paragraph', content: 'Hello, I created Windows! 👋' },
      { type: 'paragraph', content: '' },
      { type: 'link', content: 'https://www.microsoft.com/' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://files.sunoresearch.com.br/p/uploads/2021/12/Steve_Jobs.jpg',
      name: 'Steve Jobs',
      role: 'Apple'
    },
    content: [
      { type: 'paragraph', content: 'Hello, I created Iphone! 👋' },
      { type: 'paragraph', content: '' },
      { type: 'link', content: 'https://www.apple.com/' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}