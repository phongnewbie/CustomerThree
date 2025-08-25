
function toggleFooter(headingEl) {
    if (window.matchMedia('(max-width: 768px)').matches) {
        const column = headingEl.closest('.footer-column');
        column.classList.toggle('open');
    }
}

// Mobile drawer controls
function openMobileMenu() {
    document.getElementById('mobileDrawer').classList.add('open');
    document.getElementById('drawerBackdrop').classList.add('show');
    document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
    document.getElementById('mobileDrawer').classList.remove('open');
    document.getElementById('drawerBackdrop').classList.remove('show');
    document.body.style.overflow = '';
}
function toggleDrawerAccordion(el) {
    const group = el.closest('.drawer-group');
    group.classList.toggle('open');
}
function showTab(tabName) {
    // If photos, menu, or reviews tab is clicked, show overview tab and scroll to corresponding section
    if (tabName === 'photos' || tabName === 'menu' || tabName === 'reviews') {
        // Hide all tab panels
        const panels = document.querySelectorAll('.tab-panel');
        panels.forEach(panel => panel.style.display = 'none');
        
        // Show overview panel
        document.getElementById('overview').style.display = 'block';
        
        // Update tab active state to overview
        const tabs = document.querySelectorAll('.nav-tab');
        tabs.forEach(tab => tab.classList.remove('active'));
        document.querySelector('.nav-tab[onclick="showTab(\'overview\')"]').classList.add('active');
        
        // Scroll to the corresponding section in overview
        let targetSection;
        if (tabName === 'photos') {
            targetSection = document.querySelector('.photos-section');
        } else if (tabName === 'menu') {
            targetSection = document.querySelector('.menu-section');
        } else if (tabName === 'reviews') {
            targetSection = document.querySelector('.reviews-section');
        }
        
        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
        return;
    }
    
    // For other tabs (overview, reviews, details), show the panel directly
    // Hide all tab panels
    const panels = document.querySelectorAll('.tab-panel');
    panels.forEach(panel => panel.style.display = 'none');
    
    // Show selected panel
    document.getElementById(tabName).style.display = 'block';
    
    // Update tab active state
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
}

            // Time slot selection
    document.addEventListener('DOMContentLoaded', function() {
        const timeSlots = document.querySelectorAll('.time-slot');
        timeSlots.forEach(slot => {
            slot.addEventListener('click', function() {
                // Remove selected class from all slots
                timeSlots.forEach(s => s.classList.remove('selected'));
                // Add selected class to clicked slot
                this.classList.add('selected');
            });
        });

                    // Notify me button (only if element exists)
    const notifyBtn = document.querySelector('.notify-btn');
    if (notifyBtn) {
        notifyBtn.addEventListener('click', function() {
            alert('Notification preferences will be set up...');
        });
    }

    // Loved For scroll arrows (only if elements exist)
    const scrollLeft = document.querySelector('.scroll-arrow.left');
    const scrollRight = document.querySelector('.scroll-arrow.right');
    const chipScroll = document.querySelector('.chip-scroll');
    
    if (scrollLeft && scrollRight && chipScroll) {
        scrollLeft.addEventListener('click', () => {
            chipScroll.scrollBy({ left: -200, behavior: 'smooth' });
        });
        scrollRight.addEventListener('click', () => {
            chipScroll.scrollBy({ left: 200, behavior: 'smooth' });
        });
    }

    // Removed concierge interactions

    // Save restaurant button (only if element exists)
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            if (this.textContent.includes('Save')) {
                this.textContent = '✅ Saved';
                this.style.background = '#d4edda';
            } else {
                this.textContent = '💾 Save this restaurant';
                this.style.background = 'white';
            }
        });
    }

    // Photo count click (only if element exists)
    const photoCount = document.querySelector('.photo-count');
    if (photoCount) {
        photoCount.addEventListener('click', function() {
            alert('Opening photo gallery...');
        });
    }

    // Menu tab switching (only if elements exist)
    const menuTabs = document.querySelectorAll('.menu-tab');
    const helloMenu = document.getElementById('hello-menu');
    const artusiMenu = document.getElementById('artusi-menu');
    
    if (menuTabs.length > 0 && helloMenu && artusiMenu) {
        menuTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                menuTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const menuType = this.getAttribute('data-menu');
                if (menuType === 'hello') {
                    helloMenu.style.display = 'block';
                    artusiMenu.style.display = 'none';
                } else if (menuType === 'artusi') {
                    helloMenu.style.display = 'none';
                    artusiMenu.style.display = 'block';
                }
            });
        });
    }

    // Savoury show more/less (only if elements exist)
    const savouryItems = document.getElementById('savoury-items');
    const savouryToggle = document.getElementById('savoury-toggle');
    if (savouryItems && savouryToggle) {
        function updateToggleLabel() {
            const expanded = savouryItems.classList.contains('expanded');
            savouryToggle.textContent = expanded ? 'Collapse menu' : 'View full menu';
        }
        updateToggleLabel();
        savouryToggle.addEventListener('click', function() {
            savouryItems.classList.toggle('expanded');
            updateToggleLabel();
        });
    }

    // Photo gallery interactions (only if elements exist)
    const photoItems = document.querySelectorAll('.photo-item');
    if (photoItems.length > 0) {
        photoItems.forEach(item => {
            item.addEventListener('click', function() {
                if (this.classList.contains('more')) {
                    alert('Opening full photo gallery with 116 photos...');
                } else {
                    alert('Opening photo viewer...');
                }
            });
        });
    }

    // Date & time pickers for reservation
    const resDate = document.getElementById('res-date');
    const resTime = document.getElementById('res-time');
    const btnDate = document.getElementById('btn-date');
    const btnTime = document.getElementById('btn-time');
    const lblDate = document.getElementById('btn-date-label');
    const lblTime = document.getElementById('btn-time-label');
    const calPanel = document.getElementById('calendar-panel');
    const timePanel = document.getElementById('time-panel');

    function formatDateLabel(yyyyMmDd) {
        const d = new Date(yyyyMmDd + 'T00:00:00');
        return d.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
    }

    function formatTimeLabel(hhmm) {
        const [hStr, mStr] = hhmm.split(':');
        let h = parseInt(hStr, 10);
        const m = mStr;
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12; if (h === 0) h = 12;
        return `${h}:${m} ${ampm}`;
    }

    // Initialize with current date and nearest 15 minutes
    const now = new Date();
    const today = now.toISOString().split('T')[0];
    const minutes = now.getMinutes();
    const roundedMinutes = Math.round(minutes / 15) * 15;
    now.setMinutes(roundedMinutes, 0, 0);
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    const hhmm = `${hh}:${mm}`;

    resDate.value = today;
    resTime.value = hhmm;
    lblDate.textContent = formatDateLabel(today);
    lblTime.textContent = formatTimeLabel(hhmm);

    // Open native pickers on button click
    function togglePanel(panel, anchor) {
        const rect = anchor.getBoundingClientRect();
        panel.style.top = (rect.bottom + 6) + 'px';
        panel.style.left = rect.left + 'px';
        const visible = panel.style.display !== 'none';
        calPanel.style.display = 'none';
        timePanel.style.display = 'none';
        panel.style.display = visible ? 'none' : 'block';
    }

    // Build calendar UI
    function getMonthMatrix(year, monthIndex) {
        const firstDay = new Date(year, monthIndex, 1);
        const startDay = new Date(firstDay);
        startDay.setDate(firstDay.getDate() - ((firstDay.getDay() + 6) % 7)); // Monday-first
        const cells = [];
        for (let i = 0; i < 42; i++) {
            const d = new Date(startDay);
            d.setDate(startDay.getDate() + i);
            cells.push(d);
        }
        return cells;
    }

    let calYear = now.getFullYear();
    let calMonth = now.getMonth();

    function renderCalendar() {
        const cells = getMonthMatrix(calYear, calMonth);
        const monthLabel = new Date(calYear, calMonth, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        const todayStr = new Date().toISOString().split('T')[0];
        const selectedStr = resDate.value;

        calPanel.innerHTML = `
            <div class="calendar">
                <div class="cal-header">
                    <button class="icon-btn" id="cal-prev">‹</button>
                    <div>${monthLabel}</div>
                    <button class="icon-btn" id="cal-next">›</button>
                </div>
                <div class="cal-week"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
                <div class="cal-grid">
                    ${cells.map(d => {
                        const iso = d.toISOString().split('T')[0];
                        const isOther = d.getMonth() !== calMonth;
                        const isToday = iso === todayStr;
                        const isSelected = iso === selectedStr;
                        return `<div class="cal-cell ${isOther ? 'is-other' : ''} ${isToday ? 'is-today' : ''} ${isSelected ? 'is-selected' : ''}" data-date="${iso}">${d.getDate()}</div>`;
                    }).join('')}
                </div>
            </div>`;

        calPanel.querySelector('#cal-prev').addEventListener('click', () => {
            if (calMonth === 0) { calMonth = 11; calYear--; } else { calMonth--; }
            renderCalendar();
        });
        calPanel.querySelector('#cal-next').addEventListener('click', () => {
            if (calMonth === 11) { calMonth = 0; calYear++; } else { calMonth++; }
            renderCalendar();
        });
        calPanel.querySelectorAll('.cal-cell').forEach(cell => {
            cell.addEventListener('click', () => {
                const val = cell.getAttribute('data-date');
                resDate.value = val;
                lblDate.textContent = formatDateLabel(val);
                calPanel.style.display = 'none';
            });
        });
    }

    function renderTimeOptions() {
        const openHour = 7;  // 7:00
        const closeHour = 22; // 10:00 PM
        const stepMin = 15;
        const options = [];
        for (let h = openHour; h <= closeHour; h++) {
            for (let m = 0; m < 60; m += stepMin) {
                const hh = String(h).padStart(2, '0');
                const mm = String(m).padStart(2, '0');
                options.push(`${hh}:${mm}`);
            }
        }
        timePanel.innerHTML = options.map(t => `<button class="time-option" data-time="${t}">${formatTimeLabel(t)}</button>`).join('');
        timePanel.querySelectorAll('.time-option').forEach(opt => {
            opt.addEventListener('click', () => {
                const val = opt.getAttribute('data-time');
                resTime.value = val;
                lblTime.textContent = formatTimeLabel(val);
                timePanel.style.display = 'none';
            });
        });
    }

    btnDate.addEventListener('click', (e) => {
        e.stopPropagation();
        renderCalendar();
        togglePanel(calPanel, btnDate);
    });
    btnTime.addEventListener('click', (e) => {
        e.stopPropagation();
        renderTimeOptions();
        togglePanel(timePanel, btnTime);
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!calPanel.contains(e.target) && !btnDate.contains(e.target)) calPanel.style.display = 'none';
        if (!timePanel.contains(e.target) && !btnTime.contains(e.target)) timePanel.style.display = 'none';
    });

    // Reflect changes to labels (native fallback)
    resDate.addEventListener('change', function() {
        if (this.value) lblDate.textContent = formatDateLabel(this.value);
    });
    resTime.addEventListener('change', function() {
        if (this.value) lblTime.textContent = formatTimeLabel(this.value);
    });

    // Ask question button (only if element exists)
    const askQuestionBtn = document.querySelector('.ask-question-btn');
    if (askQuestionBtn) {
        askQuestionBtn.addEventListener('click', function() {
            const question = prompt('What would you like to ask about this restaurant?');
            if (question) {
                alert('Concierge: Thank you for your question! Let me help you with that...');
            }
        });
    }

    // Pagination functionality
    const reviewsData = {
        1: [
            {
                name: 'Leanne',
                location: 'Adelaide - 2 reviews',
                date: 'Dined on June 11, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Friendly Staff, Amazing Food, Excellent Wine/Cocktail selections, Great Service.',
                hasReadMore: true,
                photos: []
            },
            {
                name: 'Deanna',
                location: 'WA - 1 review',
                date: 'Dined on June 7, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Great place to eat on a rainy night. All food was divine, especially the house made gnocchi, and we ended up with leftovers for lunch the next day. Thank you Artusi for helping celebrate my partner\'s birthday!',
                hasReadMore: false,
                photos: [
                    'https://resizer.otstatic.com/v3/photos/32600168-3?width=70&height=70&webp=true',
                    'https://resizer.otstatic.com/v3/photos/32600170-3?width=70&height=70&webp=true'
                ]
            },
            {
                name: 'Michael',
                location: 'Melbourne - 5 reviews',
                date: 'Dined on June 5, 2025',
                rating: 4,
                food: 4,
                service: 5,
                ambience: 4,
                comment: 'Great atmosphere and friendly service. The pasta was perfectly cooked and the wine selection was impressive. Will definitely return!',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Sarah',
                location: 'Sydney - 3 reviews',
                date: 'Dined on June 3, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Absolutely loved the brunch here! The eggs benedict was perfect and the coffee was amazing. The outdoor seating area is beautiful.',
                hasReadMore: false,
                photos: [
                    'https://resizer.otstatic.com/v3/photos/32600169-3?width=70&height=70&webp=true'
                ]
            },
            {
                name: 'David',
                location: 'Brisbane - 2 reviews',
                date: 'Dined on May 30, 2025',
                rating: 5,
                food: 5,
                service: 4,
                ambience: 5,
                comment: 'Excellent Italian cuisine! The gnocchi was homemade and delicious. The staff were very attentive and the wine pairing suggestions were spot on.',
                hasReadMore: true,
                photos: []
            },
            {
                name: 'Emma',
                location: 'Perth - 1 review',
                date: 'Dined on May 28, 2025',
                rating: 4,
                food: 4,
                service: 5,
                ambience: 4,
                comment: 'Nice place for a date night. The food was good and the service was excellent. The atmosphere was romantic and cozy.',
                hasReadMore: false,
                photos: []
            }
        ],
        2: [
            {
                name: 'James',
                location: 'Adelaide - 8 reviews',
                date: 'Dined on May 25, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Been coming here for years and it never disappoints. The quality is consistently excellent and the staff remember our preferences.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Sophie',
                location: 'Adelaide - 3 reviews',
                date: 'Dined on May 22, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Perfect spot for brunch! The avocado toast was amazing and the coffee was top-notch. Love the outdoor seating area.',
                hasReadMore: false,
                photos: [
                    'https://resizer.otstatic.com/v3/photos/32600168-3?width=70&height=70&webp=true'
                ]
            },
            {
                name: 'Tom',
                location: 'Melbourne - 4 reviews',
                date: 'Dined on May 20, 2025',
                rating: 4,
                food: 4,
                service: 5,
                ambience: 4,
                comment: 'Great Italian food! The pasta was perfectly al dente and the sauce was rich and flavorful. Service was attentive.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Rachel',
                location: 'Sydney - 2 reviews',
                date: 'Dined on May 18, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Amazing experience! The wine pairing was perfect and the dessert was to die for. Highly recommend for special occasions.',
                hasReadMore: true,
                photos: []
            },
            {
                name: 'Alex',
                location: 'Brisbane - 1 review',
                date: 'Dined on May 15, 2025',
                rating: 4,
                food: 4,
                service: 4,
                ambience: 5,
                comment: 'Nice atmosphere and good food. The portions were generous and the staff were friendly. Would visit again.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Maria',
                location: 'Perth - 5 reviews',
                date: 'Dined on May 12, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Exceptional dining experience! The gnocchi was homemade and the tiramisu was the best I\'ve ever had.',
                hasReadMore: false,
                photos: [
                    'https://resizer.otstatic.com/v3/photos/32600170-3?width=70&height=70&webp=true'
                ]
            }
        ],
        3: [
            {
                name: 'Chris',
                location: 'Adelaide - 6 reviews',
                date: 'Dined on May 10, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Outstanding service and delicious food. The staff went above and beyond to make our anniversary special.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Jessica',
                location: 'Melbourne - 3 reviews',
                date: 'Dined on May 8, 2025',
                rating: 4,
                food: 4,
                service: 5,
                ambience: 4,
                comment: 'Great place for a business lunch. The food was good and the service was professional and efficient.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Daniel',
                location: 'Sydney - 4 reviews',
                date: 'Dined on May 5, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Fantastic Italian cuisine! The risotto was creamy and the wine selection was excellent. Perfect date night spot.',
                hasReadMore: true,
                photos: [
                    'https://resizer.otstatic.com/v3/photos/32600169-3?width=70&height=70&webp=true'
                ]
            },
            {
                name: 'Amanda',
                location: 'Brisbane - 2 reviews',
                date: 'Dined on May 3, 2025',
                rating: 4,
                food: 4,
                service: 4,
                ambience: 5,
                comment: 'Lovely atmosphere and good food. The outdoor seating was perfect for the weather. Staff were friendly.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Kevin',
                location: 'Perth - 1 review',
                date: 'Dined on May 1, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Amazing food and service! The pasta dishes were authentic and the desserts were heavenly.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Laura',
                location: 'Adelaide - 3 reviews',
                date: 'Dined on April 28, 2025',
                rating: 4,
                food: 4,
                service: 5,
                ambience: 4,
                comment: 'Good food and nice atmosphere. The coffee was excellent and the breakfast menu had great options.',
                hasReadMore: false,
                photos: []
            }
        ],
        49: [
            {
                name: 'Lisa',
                location: 'Adelaide - 2 reviews',
                date: 'Dined on January 10, 2025',
                rating: 4,
                food: 4,
                service: 4,
                ambience: 5,
                comment: 'Good food and nice atmosphere. The outdoor seating is perfect for summer evenings. Would recommend for casual dining.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Mark',
                location: 'Melbourne - 7 reviews',
                date: 'Dined on January 8, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Consistently excellent! Been coming here for years and the quality never drops. Best Italian in Adelaide.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Nicole',
                location: 'Sydney - 5 reviews',
                date: 'Dined on January 5, 2025',
                rating: 4,
                food: 4,
                service: 5,
                ambience: 4,
                comment: 'Great place for family dinner. The kids loved the pasta and the adults enjoyed the wine selection.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Peter',
                location: 'Brisbane - 3 reviews',
                date: 'Dined on January 3, 2025',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Outstanding experience! The food was authentic Italian and the service was impeccable.',
                hasReadMore: true,
                photos: []
            },
            {
                name: 'Helen',
                location: 'Perth - 2 reviews',
                date: 'Dined on January 1, 2025',
                rating: 4,
                food: 4,
                service: 4,
                ambience: 5,
                comment: 'Nice restaurant with good food. The atmosphere was relaxed and the staff were helpful.',
                hasReadMore: false,
                photos: []
            },
            {
                name: 'Robert',
                location: 'Adelaide - 4 reviews',
                date: 'Dined on December 30, 2024',
                rating: 5,
                food: 5,
                service: 5,
                ambience: 5,
                comment: 'Perfect way to end the year! The food was exceptional and the service was outstanding.',
                hasReadMore: false,
                photos: []
            }
        ]
    };

    function renderReviews(pageNumber) {
        const reviewsContainer = document.querySelector('.customer-reviews');
        if (!reviewsContainer) return;
        
        const reviewsList = reviewsContainer.querySelector('.review-item').parentNode;
        
        // Clear existing reviews
        const existingReviews = reviewsContainer.querySelectorAll('.review-item');
        existingReviews.forEach(review => review.remove());
        
        // Get reviews for current page
        const currentReviews = reviewsData[pageNumber] || reviewsData[1];
        
        // Render new reviews
        currentReviews.forEach(review => {
            const reviewHTML = `
                <div class="review-item">
                    <div class="review-header">
                        <div class="reviewer-info">
                            <div class="profile-icon ${getProfileColor(review.name)}">${review.name.charAt(0)}</div>
                            <div class="reviewer-details">
                                <div class="reviewer-name">${review.name}</div>
                                <div class="reviewer-location">${review.location}</div>
                                <div class="dining-date">${review.date}</div>
                            </div>
                        </div>
                        <div class="review-ratings">
                            <div class="overall-rating">
                                <span class="stars">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</span>
                                <span class="rating-text">Overall ${review.rating}</span>
                            </div>
                            <div class="detailed-ratings">
                                <span>Food ${review.food}</span> • <span>Service ${review.service}</span> • <span>Ambience ${review.ambience}</span>
                            </div>
                        </div>
                    </div>
                    <div class="review-content">
                        <p class="review-comment">${review.comment}${review.hasReadMore ? ' <a href="#" class="read-more">Read more</a>' : ''}</p>
                        ${review.photos.length > 0 ? `
                            <div class="review-photos">
                                ${review.photos.map(photo => `<img src="${photo}" alt="Food photo" class="review-image">`).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <div class="review-helpful">
                        <span class="helpful-icon">👍</span>
                        <span class="helpful-text">Is this helpful?</span>
                    </div>
                </div>
            `;
            reviewsList.insertAdjacentHTML('beforeend', reviewHTML);
        });
    }

    function getProfileColor(name) {
        const colors = ['purple', 'blue', 'pink', 'green', 'orange', 'red'];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    }

    // Add pagination event listeners
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('page-number')) {
            const pageNumber = parseInt(e.target.dataset.page);
            console.log('Page clicked:', pageNumber);
            
            // Update active state
            document.querySelectorAll('.page-number').forEach(page => page.classList.remove('active'));
            e.target.classList.add('active');
            
            // Render reviews for selected page
            renderReviews(pageNumber);
        }
    });

    // Initialize with page 1
    setTimeout(() => {
        console.log('Initializing pagination...');
        renderReviews(1);
    }, 100);

    // FAQs functionality
    const faqHeaders = document.querySelectorAll('.faq-header');
    faqHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const arrow = this.querySelector('.faq-arrow');
            const answer = faqItem.querySelector('.faq-answer');
            
            // Toggle active state
            arrow.classList.toggle('active');
            
            // Toggle answer visibility
            if (answer.style.display === 'none' || answer.style.display === '') {
                answer.style.display = 'block';
            } else {
                answer.style.display = 'none';
            }
        });
    });

    // Breadcrumb navigation
    const breadcrumbItems = document.querySelectorAll('.breadcrumb-nav span:not(.breadcrumb-separator)');
    breadcrumbItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Breadcrumb clicked:', this.textContent);
            // Add navigation logic here
        });
    });
});