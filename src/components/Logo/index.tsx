import Link from 'next/link';
import { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <Link href='/'>
      <a>
        <svg
          width={116}
          height={24}
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          {...props}
        >
          <path
            d='M1.936 23.224c-.512 0-.907-.139-1.184-.416-.277-.299-.416-.704-.416-1.216v-12.8c0-.533.139-.939.416-1.216.277-.277.661-.416 1.152-.416.512 0 .896.139 1.152.416.277.277.416.683.416 1.216v2.624l-.352-.704c.427-1.13 1.088-2.016 1.984-2.656.896-.64 1.973-.96 3.232-.96 1.301 0 2.357.31 3.168.928.81.619 1.365 1.568 1.664 2.848h-.448c.405-1.173 1.099-2.09 2.08-2.752.981-.683 2.123-1.024 3.424-1.024 1.195 0 2.176.235 2.944.704.768.448 1.344 1.141 1.728 2.08.384.917.576 2.08.576 3.488v8.224c0 .512-.15.917-.448 1.216-.277.277-.672.416-1.184.416-.512 0-.907-.139-1.184-.416-.277-.299-.416-.704-.416-1.216v-8.064c0-1.323-.235-2.293-.704-2.912-.448-.619-1.195-.928-2.24-.928-1.173 0-2.101.405-2.784 1.216-.683.81-1.024 1.93-1.024 3.36v7.328c0 .512-.139.917-.416 1.216-.277.277-.672.416-1.184.416-.512 0-.917-.139-1.216-.416-.277-.299-.416-.704-.416-1.216v-8.064c0-1.323-.224-2.293-.672-2.912-.448-.619-1.195-.928-2.24-.928-1.173 0-2.101.405-2.784 1.216-.661.81-.992 1.93-.992 3.36v7.328c0 1.088-.544 1.632-1.632 1.632Zm27.655-.032c-.512 0-.907-.15-1.184-.448-.278-.32-.416-.757-.416-1.312V8.952c0-.555.138-.981.416-1.28.277-.299.672-.448 1.184-.448.512 0 .906.15 1.184.448.298.299.448.725.448 1.28v12.48c0 .555-.139.992-.416 1.312-.278.299-.683.448-1.216.448Zm0-19.296c-.64 0-1.142-.16-1.504-.48-.342-.32-.512-.768-.512-1.344 0-.597.17-1.045.512-1.344.362-.32.864-.48 1.504-.48s1.13.16 1.472.48c.362.299.544.747.544 1.344 0 .576-.182 1.024-.544 1.344-.342.32-.832.48-1.472.48Zm11.653 19.392c-.939 0-1.91-.107-2.912-.32a8.658 8.658 0 0 1-2.72-1.088c-.277-.192-.47-.405-.576-.64a1.378 1.378 0 0 1-.128-.704c.043-.256.139-.47.288-.64.17-.192.373-.31.608-.352.256-.043.523.01.8.16.832.47 1.632.8 2.4.992.768.17 1.525.256 2.272.256 1.13 0 1.984-.203 2.56-.608.576-.405.864-.95.864-1.632 0-.555-.192-.981-.576-1.28-.384-.32-.96-.565-1.728-.736l-3.04-.608c-1.323-.277-2.325-.768-3.008-1.472-.683-.704-1.024-1.6-1.024-2.688 0-.981.267-1.835.8-2.56.533-.725 1.28-1.28 2.24-1.664.96-.405 2.07-.608 3.328-.608.939 0 1.824.117 2.656.352a8.08 8.08 0 0 1 2.304 1.056c.277.15.459.352.544.608.085.235.096.47.032.704-.043.235-.15.448-.32.64-.17.17-.384.277-.64.32-.235.021-.501-.043-.8-.192a6.938 6.938 0 0 0-1.92-.864 6.952 6.952 0 0 0-1.856-.256c-1.13 0-1.984.213-2.56.64-.555.405-.832.96-.832 1.664 0 .533.17.97.512 1.312.341.341.875.587 1.6.736l3.04.608c1.387.277 2.432.747 3.136 1.408.725.661 1.088 1.557 1.088 2.688 0 1.472-.587 2.635-1.76 3.488-1.173.853-2.73 1.28-4.672 1.28Zm15.052 0c-1.664 0-2.923-.48-3.776-1.44-.832-.981-1.248-2.39-1.248-4.224V1.848c0-.533.139-.939.416-1.216.277-.277.672-.416 1.184-.416.512 0 .907.139 1.184.416.299.277.448.683.448 1.216v15.584c0 1.067.213 1.867.64 2.4.448.512 1.088.768 1.92.768h.512l.448-.064c.256-.021.437.053.544.224.107.15.16.47.16.96 0 .448-.096.8-.288 1.056-.192.235-.501.384-.928.448a5.52 5.52 0 0 1-.608.032 6.13 6.13 0 0 1-.608.032Zm6.357-.096c-.512 0-.906-.15-1.184-.448-.277-.32-.416-.757-.416-1.312V8.952c0-.555.139-.981.416-1.28.278-.299.672-.448 1.184-.448.512 0 .907.15 1.184.448.299.299.448.725.448 1.28v12.48c0 .555-.138.992-.416 1.312-.277.299-.682.448-1.216.448Zm0-19.296c-.64 0-1.141-.16-1.504-.48-.341-.32-.512-.768-.512-1.344 0-.597.17-1.045.512-1.344.363-.32.864-.48 1.504-.48s1.13.16 1.472.48c.363.299.544.747.544 1.344 0 .576-.181 1.024-.544 1.344-.341.32-.832.48-1.472.48Zm7.782 19.328c-.513 0-.907-.139-1.184-.416-.278-.299-.416-.704-.416-1.216v-12.8c0-.533.138-.939.416-1.216.277-.277.66-.416 1.151-.416.513 0 .897.139 1.153.416.277.277.415.683.415 1.216v2.496l-.352-.576c.47-1.195 1.206-2.09 2.209-2.688 1.002-.619 2.154-.928 3.456-.928 1.237 0 2.26.235 3.072.704.831.448 1.45 1.141 1.855 2.08.406.917.609 2.08.609 3.488v8.224c0 .512-.14.917-.416 1.216-.278.277-.672.416-1.184.416-.534 0-.94-.139-1.216-.416-.278-.299-.416-.704-.416-1.216V13.56c0-1.344-.267-2.325-.8-2.944-.513-.619-1.323-.928-2.433-.928-1.3 0-2.346.405-3.135 1.216-.768.81-1.152 1.899-1.152 3.264v7.424c0 1.088-.544 1.632-1.632 1.632Zm18.437 0c-.512 0-.907-.139-1.184-.416-.277-.299-.416-.704-.416-1.216V1.848c0-.533.139-.939.416-1.216.277-.277.672-.416 1.184-.416.512 0 .907.139 1.184.416.299.277.448.683.448 1.216V14.2h.064l5.984-5.952c.341-.341.65-.608.928-.8.277-.192.64-.288 1.088-.288.448 0 .79.117 1.024.352.235.235.352.523.352.864 0 .32-.16.65-.48.992l-6.336 6.272v-1.504l6.912 6.88c.341.341.501.683.48 1.024-.021.341-.16.63-.416.864-.256.213-.576.32-.96.32-.49 0-.885-.096-1.184-.288-.277-.192-.608-.48-.992-.864l-6.4-6.208h-.064v5.728c0 1.088-.544 1.632-1.632 1.632Zm20.091.064c-.939 0-1.91-.107-2.912-.32a8.652 8.652 0 0 1-2.72-1.088c-.278-.192-.47-.405-.576-.64a1.368 1.368 0 0 1-.128-.704c.042-.256.138-.47.288-.64.17-.192.373-.31.608-.352.256-.043.522.01.8.16.832.47 1.632.8 2.4.992.768.17 1.525.256 2.272.256 1.13 0 1.984-.203 2.56-.608.576-.405.864-.95.864-1.632 0-.555-.192-.981-.576-1.28-.384-.32-.96-.565-1.728-.736l-3.04-.608c-1.323-.277-2.326-.768-3.008-1.472-.683-.704-1.024-1.6-1.024-2.688 0-.981.266-1.835.8-2.56.533-.725 1.28-1.28 2.24-1.664.96-.405 2.069-.608 3.328-.608.938 0 1.824.117 2.656.352a8.08 8.08 0 0 1 2.304 1.056c.277.15.458.352.544.608.085.235.096.47.032.704a1.31 1.31 0 0 1-.32.64c-.171.17-.384.277-.64.32-.235.021-.502-.043-.8-.192a6.938 6.938 0 0 0-1.92-.864 6.957 6.957 0 0 0-1.856-.256c-1.131 0-1.984.213-2.56.64-.555.405-.832.96-.832 1.664 0 .533.17.97.512 1.312.341.341.874.587 1.6.736l3.04.608c1.386.277 2.432.747 3.136 1.408.725.661 1.088 1.557 1.088 2.688 0 1.472-.587 2.635-1.76 3.488-1.174.853-2.731 1.28-4.672 1.28Z'
            fill='#111827'
          />
        </svg>
      </a>
    </Link>
  );
}