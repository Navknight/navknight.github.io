import useInView from '../../hooks/useInView'

/**
 * Wraps children with a staggered fade-up animation on scroll.
 * Props:
 *   index     - position in list (for stagger delay)
 *   delay     - ms between items (default 80)
 *   className - additional classes
 *   as        - element type (default 'div')
 */
export default function AnimatedItem({ index = 0, delay = 80, className = '', as: Tag = 'div', children, ...rest }) {
  const { ref, visible } = useInView(0.1)

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
      style={{ transitionDelay: `${index * delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
