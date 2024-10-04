"use client";

import cx from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.css";

export default function Menu() {
    const [isOpen, setOpen] = useState<boolean>(false);
    const open = () => setOpen(true);
    const close = () => setOpen(false);
    return (
        <div>
            <nav className={cx(styles.nav, isOpen && styles.open)}>
            <ul className={styles.items}>
                <li>
                    <Link href="/news">ニュース</Link>
                </li>
                <li>
                    <Link href="members">メンバー</Link>
                </li>
                <li>
                    <Link href="/contact">お問い合わせ</Link>
                </li>
                <button className={cx(styles.button, styles.close)} onClick={close}>
                    <Image
                        src="/close"
                        alt="閉じる"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </ul>
        </nav>
        <button className={styles.button} onClick={open}>
            <Image
                src="/menu.svg"
                alt="メニュー"
                width={24}
                height={24}
            />
        </button>
        </div>
        
    );
}